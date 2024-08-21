import React, { useState, useEffect } from 'react';
import './Blogger.css';
import group from "../assest/8.png";
import circle from "../assest/Ellipse 1.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Card from '../Cards/CardContainer';
import email from '../assest/Component 53.svg';
import whatsapp from '../assest/Component 54.svg';
import call from '../assest/Component 55.svg';

const Blogger = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null); // Track the selected category
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch categories data from the API
    fetch('https://admin.auun.net/api/categories')  // Replace this with the correct endpoint if needed
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.status && data.data) {
          setCategories(data.data);
        } else {
          throw new Error('Failed to load categories');
        }
      })
      .catch(error => {
        console.error('Error fetching the categories data:', error);
        setError(error.message);
      });

    // Fetch all blogs initially or when activeCategoryId changes
    if (activeCategoryId !== null) {
      fetch('https://admin.auun.net/api/cat_blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'lang':'ar'
        },
        body: JSON.stringify({ cat_id: activeCategoryId }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.status && data.data) {
            setBlogs(data.data);
          } else {
            throw new Error('Failed to load blogs');
          }
        })
        .catch(error => {
          console.error('Error fetching the blog data:', error);
          setError(error.message);
        });
    } else {
      // Fetch all blogs if no category is selected
      fetch('https://admin.auun.net/api/all_blog'
       
      )
        .then(response => response.json())
        
        .then(data => {
          if (data.status && data.data) {
            setBlogs(data.data);
          }
        })
        .catch(error => console.error('Error fetching the blog data:', error));
    }
  }, [activeCategoryId]);

  const handleCategoryClick = (catId) => {
    setActiveCategoryId(catId);
  };

  // Function to limit the text to 10 lines
  const getTextWithLimitedLines = (text, maxLines = 5) => {
    const lines = text.split('\n'); // Split the text by lines
    if (lines.length <= maxLines) {
      return text; // If the text has less than or equal to 10 lines, return it as is
    }
    return lines.slice(0, maxLines).join('\n') + '...'; // Return the first 10 lines with ellipsis
  };

  return (
    <>
      <div className="background blogger">
        <img src={group} alt="gif" />
        <div className="overlayy-text">
          <h1>مدونة عون المتميزة</h1>
      
            <div className="input-with-icon">
              <input
                className=" "
                type="search"
                placeholder="ابحث"
                aria-label="Search"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-600 pointer-events-none"
              />
            </div>
            <ul className="bloggerNav ">
              {error ? (
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Error loading categories</a>
                </li>
              ) : categories.length > 0 ? (
                categories.map((category) => (
                  <li className="nav-item" key={category.id}>
                    <a
                      className={`nav-link ${activeCategoryId === category.id ? 'active' : ''}`}
                      href="#"
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {category.name}
                    </a>
                  </li>
                ))
              ) : (
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Loading categories...</a>
                </li>
              )}
            </ul>
          </div>
        </div>

      <div className="container cardContainer">
        <div className="row">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div className="col-md-6 cardGap" key={blog.id}>
                <Card
                  imgSrc={`https://admin.auun.net${blog.image}`}
                  circleSrc={circle}
                  title={blog.title}
                  date={new Date().toLocaleDateString()} 
                  text={getTextWithLimitedLines(blog.description.replace(/<[^>]+>/g, ''))}
                />
              </div>
            ))
          ) : (
            <p>No blogs available for this category.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogger;

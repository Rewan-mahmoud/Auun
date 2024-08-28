import React, { useState, useEffect } from 'react';
import './Blogger.css';
import group from "../assest/8.png";
import circle from "../assest/Ellipse 1.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Card from '../Cards/CardContainer';
import { Link } from 'react-router-dom'; // Import Link
import { useTranslation } from 'react-i18next';

const Blogger = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Fetch categories data from the API
    fetch('https://admin.auun.net/api/categories', {
      headers: {
        'lang': i18n.language // Set the language based on the current selection
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status && data.data) {
          setCategories(data.data);
        } else {
          throw new Error(t('error_loading_categories'));
        }
      })
      .catch(error => {
        console.error('Error fetching the categories data:', error);
        setError(error.message);
      });

    // Fetch blogs based on category selection
    const endpoint = activeCategoryId !== null ? 'https://admin.auun.net/api/cat_blogs' : 'https://admin.auun.net/api/all_blog';
    fetch(endpoint, {
      method: activeCategoryId !== null ? 'POST' : 'GET',
      headers: {
        'Content-Type': 'application/json',
        'lang': i18n.language
      },
      body: activeCategoryId !== null ? JSON.stringify({ cat_id: activeCategoryId }) : undefined,
    })
      .then(response => response.json())
      .then(data => {
        if (data.status && data.data) {
          setBlogs(data.data);
        }
      })
      .catch(error => console.error('Error fetching the blog data:', error));
  }, [activeCategoryId, i18n.language]);

  const handleCategoryClick = (catId) => {
    // Toggle the active category between the selected category and null
    if (activeCategoryId === catId) {
      setActiveCategoryId(null);
    } else {
      setActiveCategoryId(catId);
    }
  };

  const getTextWithLimitedLines = (text, maxLines = 2) => {
    const lines = text.split('\n');
    if (lines.length <= maxLines) {
      return text;
    }
    return lines.slice(0, maxLines).join('\n') + '...';
  };

  return (
    <>
      <div className="background blogger">
        <img src={group} alt="gif" />
        <div className="overlayy-text">
          <h1>{t('blog_title')}</h1>
          <div className="input-with-icon">
            <input
              className=" "
              type="search"
              placeholder={t('search_placeholder')}
              aria-label="Search"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-600 pointer-events-none"
            />
          </div>
          <ul className="bloggerNav">
            {error ? (
              <li className="nav-item">
                <a className="nav-link disabled" href="#">{t('error_loading_categories')}</a>
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
                <a className="nav-link disabled" href="#">{t('loading_categories')}</a>
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
                <Link to={`/blog/${blog.id}`}>
                  <Card
                    imgSrc={`https://admin.auun.net${blog.image}`}
                    circleSrc={circle}
                    title={blog.title}
                    date={new Date().toLocaleDateString()} 
                    text={getTextWithLimitedLines(blog.description.replace(/<[^>]+>/g, ''))}
                  />
                </Link>
              </div>
            ))
          ) : (
            <p>{t('no_blogs_available')}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogger;

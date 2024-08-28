import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BloggerDetails = () => {
  const { id } = useParams();
  const [blogg, setBlogg] = useState(null);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch(`https://admin.auun.net/api/show_blog/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        lang: i18n.language, // Set the language based on the current selection
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.status && data.data) {
          setBlogg(data.data);
        } else {
          throw new Error(data.message || "Invalid data structure");
        }
      })
      .catch((error) => {
        console.error("Error fetching blog detail:", error);
        setError(t("error_message")); // Use translation for error messages
      });
  }, [id, i18n.language]); // Add i18n.language as a dependency to re-fetch on language change

  if (error) {
    return (
      <div>
        {t("error")}: {error}
      </div>
    ); // Use translation for error messages
  }

  if (!blogg) {
    return <div>{t("loading")}</div>; // Use translation for loading state
  }

  return (
    <div className="governance-container">
      <div className="financial-consultation">
        <div className="content-container">
          <div className="image-container">
            <img
              src={`https://admin.auun.net/${blogg.image}`}
              alt={blogg.title}
            />
          </div>
          <h2 className="service-title">{blogg.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: blogg.description }}></p>
        </div>
      </div>

      <div className="container governance">
        <h2 className="text-center title">{t("send_message_form")}</h2>
        <div className="contact mb-5">
          <div className="form-container">
            <form action="#" method="post">
              <div className="d-flex">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">{t("name")}</label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder={t("name")}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">{t("email")}</label>
                    <div className="input-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder={t("email")}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="phone">{t("phone")}</label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder={t("phone")}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="companyName">{t("company_name")}</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder={t("company_name")}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t("message")}</label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  placeholder={t("message")}
                ></textarea>
              </div>
              <button type="submit">{t("submit_button")}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloggerDetails;

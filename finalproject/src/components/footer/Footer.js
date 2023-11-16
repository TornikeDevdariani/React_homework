import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__col">
            <h4 className="footer__title">About Us</h4>
            <p className="footer__text">
              We are a movie website that provides the latest information about
              movies and TV shows.
            </p>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Contact Us</h4>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="mailto:contact@movies.com" className="footer__link">
                  Email Us
                </a>
              </li>
              <li className="footer__list-item">
                <a href="tel:+1234567890" className="footer__link">
                  Call Us
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Follow Us</h4>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a
                  href="https://www.facebook.com/movies"
                  className="footer__link"
                >
                  Facebook
                </a>
              </li>
              <li className="footer__list-item">
                <a
                  href="https://www.twitter.com/movies"
                  className="footer__link"
                >
                  Twitter
                </a>
              </li>
              <li className="footer__list-item">
                <a
                  href="https://www.instagram.com/movies"
                  className="footer__link"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

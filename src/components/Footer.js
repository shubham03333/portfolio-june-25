import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-name">Shubham Jadhav</h3>

        <div className="footer-socials">
          <a
            href="https://github.com/shubham03333"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-jadhav-sj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Shubham Jadhav | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

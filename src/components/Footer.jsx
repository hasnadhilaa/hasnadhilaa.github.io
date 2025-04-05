import React from "react";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Hasna Fadhilah Ramadhan. Made With{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            React.js
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

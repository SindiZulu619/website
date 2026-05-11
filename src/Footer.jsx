import React from "react";
import Safety from "./assets/Safety.jpeg";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer-container">

      <div className="footer-left">

        <div className="footer-image-wrapper">
          <img
            src={Safety}
            alt="Safety"
            className="footer-logo"
          />
        </div>

        <p className="footer-text">
          <span className="footer-heading">
            Built for compliance. Designed for peace of mind
          </span>
          <br />
          Stay audit-ready. Protect what matters most.
        </p>

      </div>

      <div className="footer-right">

        <div className="footer-box primary">
          <strong>Book a Demo</strong>
        </div>

        <div className="footer-box secondary">
          <strong>Run a Pilot</strong>
        </div>

      </div>

    </footer>
  );
};

export default Footer;










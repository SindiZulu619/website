import React from "react"
import { NavLink } from "react-router-dom"
import { FaLinkedinIn, FaYoutube } from "react-icons/fa"
import Logo from "./assets/Logo.png"
import "./App.css"

const FooterLinks = () => {
  return (
    <footer className="bd-footer">
      <div className="container">

        <div className="footer-row">

          {/* Brand */}
          <div className="footer-brand">
            <NavLink to="/" className="logo-link">
              <div className="logo-container footer-logo-container">

                <img
                  src={Logo}
                  alt="Logo"
                  width="130"
                  height="38"
                  className="footer-logo-img"
                />

                <span className="logo-tagline">
                  Smart compliance logging for a safer, smarter tomorrow.
                </span>

              </div>
            </NavLink>
          </div>

          <div className="footer-col">
            <h5>Product</h5>
            <ul>
              <li>Features</li>
              <li>Integrations</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Solution</h5>
            <ul>
              <li>Fire Safety</li>
              <li>Lift Compliance</li>
              <li>Asset Inspections</li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Resources</h5>
            <ul>
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Help Centre</li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          
          <div className="social-icons">
            <h5>Follow Us</h5>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon youtube-icon "
            >
              <FaYoutube />
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default FooterLinks







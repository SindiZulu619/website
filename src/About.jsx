import { useState } from "react";
import aboutHero from "./assets/about-us.jpg";
import "./index.css";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="light-grey-page">
      <img
        src={aboutHero}
        alt="About Cortex Microsystems"
        className="w-100"
        style={{ height: "70vh", objectFit: "cover" }}
      />
      <div className="container my-5">

        {!showMore ? (
          <div className="about-paragraph">
            <h2>About Us</h2>

            <p>
              Cortex Microsystems designs, builds, and deploys technology
              solutions to strengthen trust in complex supply chains.
            </p>

            <p>
              We focus on detecting and deterring counterfeiting, tampering,
              grey market diversion, theft, and inventory mismanagement.
            </p>

            <p>
              Our solutions combine NFC, cryptography, and real-time anomaly
              detection to provide secure authentication and visibility.
            </p>

            <p>
              Based in{" "}
              <span className="location-highlight">
                Braamfontein, Johannesburg, South Africa
              </span>
              , we serve pharmaceuticals, FMCG, automotive, courier, and
              agricultural sectors.
            </p>

            <div
              className="learn-more-btn"
              onClick={() => setShowMore(true)}
            >
              Learn More
            </div>
          </div>
        ) : (
          <div className="about-paragraph">

            <h3>Who We Are</h3>
            <p>
              Cortex Microsystems is a South Africa–based technology venture
              focused on embedded systems, secure hardware, and authentication
              technologies.
            </p>

            <h3>What We Do</h3>
            <p>
              We provide solutions that detect and deter counterfeiting,
              tampering, diversion, and supply chain inefficiencies using
              advanced technologies.
            </p>

            <h3>Core Technologies</h3>
            <ul className="clean-list">
              <li>NFC (Near Field Communication)</li>
              <li>Cryptographic authentication</li>
              <li>Real-time anomaly detection</li>
              <li>Secure hardware systems</li>
            </ul>

            <h3>Industries We Serve</h3>
            <ul className="clean-list">
              <li>Pharmaceuticals</li>
              <li>FMCG & Brand Protection</li>
              <li>Automotive Supply Chains</li>
              <li>Logistics & Courier Services</li>
              <li>Agricultural Processing</li>
            </ul>

            <div
              className="learn-more-btn"
              onClick={() => setShowMore(false)}
            >
              Back
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
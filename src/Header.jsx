import { NavLink } from "react-router-dom";
import logo from "./assets/logo.png";
import "./App.css";

export default function Header() {

  const nav = [
    { name: "Home", path: "/" },
    { name: "Inventory Solutions", path: "/inventory", hasDropdown: true },
    { name: "Industries", path: "/industries", hasDropdown: true },
    { name: "How It Works", path: "/how-it-works" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="app-header">

      <NavLink to="/" className="logo-link">
        <div className="logo-container">
          <img
            src={logo}
            alt="CORTEX Logo"
            width="200"
            height="50"
          />
          
          
        </div>
      </NavLink>

      <ul className="nav-list">
        {nav.map((item) => (
          <li key={item.name} className="nav-item">

            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `nav-link custom-link ${isActive ? "active-link" : ""}`
              }
            >
              {item.name}

              {item.hasDropdown && (
                <span className="dropdown-arrow">▼</span>
              )}
            </NavLink>

            {(item.name === "Authenticity" || item.name === "Tamper Detection") && (
              <div className="status-row"></div>
            )}

          </li>
        ))}
      </ul>

    </header>
  );
}



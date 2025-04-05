import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Project" },
    { href: "#education", label: "Education" },
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Logo */}
        <a href="/" className="nav-logo">
          <span className="logo">H</span>
          <span className="nav-title">Hasna</span>
        </a>

        {/* Hamburger Icon */}
        <div className="mobile-icon" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Desktop Nav Items */}
        <ul className="nav-items">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop GitHub Button */}
        <div className="button-container">
          <a
            href="https://github.com/hasnadhilaa"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            Github Profile
          </a>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="close-icon" onClick={toggleMenu}>
          <MdClose size={28} />
        </div>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-menu-links"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://github.com/hasnadhilaa"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button mobile"
        >
          Github Profile
        </a>
      </div>

      {/* Overlay Background */}
      {open && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>
  );
}

export default Navbar;

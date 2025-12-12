import React from "react";
import { X, List } from "phosphor-react";
import "./header.css";

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className={menuOpen ? "menu-open" : ""}>
      <div className="header-inner">
        <a href="#">
          <img src="/src/assets/images/logo-whitesvg.svg" alt="Phurten logo white" />
        </a>
        <nav id="main-menu" className="desktop-menu">
          <ul className="desktop-menu-list">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        {/*showing hamburger menu only on mobile*/}
        <button
          id="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="main-menu-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          className={menuOpen ? "hide-toggle" : ""}
        >
          <List size={36} weight="bold" />
        </button>
      </div>
      {/*for fullscreen mobile menu overlay, only when open */}
      {menuOpen && (
        <nav
          id="main-menu-mobile"
          className="mobile-menu show"
        >
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="close-menu-btn"
          >
            <X size={36} weight="bold" />
          </button>
          <ul className="mobile-menu-list">
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

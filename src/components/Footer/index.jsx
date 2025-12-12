import React from "react";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div id="footer-content">
        <img src="/src/assets/images/logo-black.svg" alt="Phurten logo black" />
        <h1>let's code together </h1>
        <nav id="footer-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div id="copyright-section">
        <div>
          <h3>© 2025 PHURTEN JANG SHERPA. ALL RIGHT RESERVED. </h3>
        </div>
        <div id="privacy-policy">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">TERMS & CONDITIONS</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-container">
      <div id="hero1">
        <img src="/src/assets/images/small-image-1.png" alt="Decoration image 1" />
      </div>
      <div id="main-hero">
        <div id="hero-text">
          <h2>web developer</h2>
        </div>
      </div>
      <div id="hero2">
        <img src="/src/assets/images/small-image-2.png" alt="Decoration image 2" />
      </div>
    </section>
  );
}

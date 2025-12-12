import React from "react";
import { ArrowRight, LinkedinLogo, EnvelopeSimple } from "phosphor-react";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-container" id="contact">
      <div id="contact-heading">
        <div id="contact-title">
          <h2>get in touch.</h2>
        </div>
        <p>Whether you have an idea, a project, or just want to say hello...</p>
      </div>
      <div id="contact-links">
        <img src="/contact-image.png" alt="Contact Illustration" />
        <div className="contact-link-list">
          <a
            href="https://www.linkedin.com/in/phurtenjangsherpa/"
            className="contact-link linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo className="contact-icon" />
            Connect on LinkedIn
            <ArrowRight className="contact-arrow" />
          </a>
          <a
            href="mailto:phurtenjangsherpa@gmail.com"
            className="contact-link email"
          >
            <EnvelopeSimple className="contact-icon" />
            phurtenjangsherpa@gmail.com
            <ArrowRight className="contact-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

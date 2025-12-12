import React, { useState, useEffect } from "react";
import "./SkillsSection.css";

export default function SkillsSection() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("https://jassignment1-phurtenjangsherpa.onrender.com/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch(() => setSkills([]));
  }, []);

  return (
    <section className="skills-container" id="skills">
      <div className="skills-heading">
        <h2>skills.</h2>
      </div>
      <div className="skills-list">
        {skills.length === 0 ? (
          <div style={{ color: '#888', fontSize: '1.1em', padding: '32px 0' }}>Loading skills...</div>
        ) : (
          skills.map((skill, idx) => (
            <div className="skill-badge" key={skill._id || skill.name || idx}>
              {skill.iconUrl && <img src={skill.iconUrl} alt={skill.name} className="skill-icon" />}
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                {skill.category && <span className="skill-category">{skill.category}</span>}
              </div>
              {skill.proficiency && (
                <div className="skill-proficiency-bar-container">
                  <div
                    className="skill-proficiency-bar"
                    style={{ width: `${((parseFloat(skill.proficiency) || 0) / 5) * 100}%` }}
                  >
                    <span className="skill-proficiency-label">{skill.proficiency} / 5</span>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}

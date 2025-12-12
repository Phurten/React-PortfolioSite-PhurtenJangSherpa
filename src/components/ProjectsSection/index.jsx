import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "phosphor-react";
import "./ProjectsSection.css";
import SkillsSection from "../SkillsSection";
import { fetchProjects } from "../../api";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const total = projects.length;
  const containerRef = useRef(null);

  //fetching projects from our api.js
  useEffect(() => {
    fetchProjects()
      .then((data) => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  // making it responsive: two projects on desktop, one on mobile
  const isDesktop = typeof window !== 'undefined' && window.innerWidth > 768;
  const getVisibleProjects = () => {
    if (isDesktop && total > 1) {
      const second = (current + 1) % total;
      return [projects[current], projects[second]];
    } else if (total > 0) {
      return [projects[current]];
    } else {
      return [];
    }
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  };
  const nextProject = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  };

  useEffect(() => {
    const handleResize = () => setCurrent((c) => c);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleProjects = getVisibleProjects();

  return (
    <>
      <SkillsSection />
      <section className="project-container" id="projects">
        <div id="project-heading">
          <div id="project-title">
            <h2>projects.</h2>
          </div>
          <div id="sliders">
            <button onClick={prevProject} aria-label="Previous project" disabled={total === 0}>
              <ArrowLeft size={32} weight="bold" />
            </button>
            <button onClick={nextProject} aria-label="Next project" disabled={total === 0}>
              <ArrowRight size={32} weight="bold" />
            </button>
          </div>
        </div>
        <div
          className={`project-card-container glide-${direction === 1 ? "right" : direction === -1 ? "left" : "none"}`}
          ref={containerRef}
          onAnimationEnd={() => setDirection(0)}
        >
          {visibleProjects.length === 0 ? (
            <div style={{ color: '#888', fontSize: '1.2em', padding: '48px 0' }}>Loading projects...</div>
          ) : (
            visibleProjects.map((project, idx) => (
              <div className="project-card" key={project._id || project.title || idx}>
                <img src={project.imageUrl} alt={project.title + ' Preview'} className="project-image" />
                <div className="project-tags-status-row">
                  {Array.isArray(project.technologies) && (
                    <div className="project-tags">
                      {project.technologies.map((tech, i) => (
                        <span className="project-badge" key={i}>{tech}</span>
                      ))}
                    </div>
                  )}
                  {project.status && (
                    <span
                      className="project-badge project-status-badge"
                      data-status={
                        project.status
                          .trim()
                          .toLowerCase()
                          .replace(/\b\w/g, c => c.toUpperCase())
                      }
                    >
                      {project.status}
                    </span>
                  )}
                </div>
                <div className="project-detail">
                  <h3>{project.title}</h3>
                  <h4>{project.company}</h4>
                </div>
                {/*project description */}
                {project.description && (
                  <div className="project-description">
                    <p className="project-description-text">{project.description}</p>
                  </div>
                )}
                {/*visit site button*/}
                <div style={{ flex: 1 }} />
                {project.liveUrl && (
                  <a href={project.liveUrl} className="primary-button visit-site-btn" target="_blank" rel="noopener noreferrer">
                    VISIT SITE <ArrowRight size={20} weight="bold" style={{ marginLeft: 8 }} />
                  </a>
                )}
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}

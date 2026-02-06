import React, { useEffect, useRef, useState } from "react";

function ProjectItem({ title, description, tags, icon }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`project-card ${isVisible ? "fade-in-up" : ""}`}
    >
      <div className="project-icon">{icon || "🚀"}</div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      {tags && (
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      <button className="project-btn">View Project</button>
    </div>
  );
}

export default ProjectItem;

import { projects } from "../data/portfolioData";
import { FaArrowUpRightFromSquare, FaFolder, FaStar } from "react-icons/fa6";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Projects() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="section section-alt" id="projects">
      <h2 ref={titleRef} className={`section-title reveal ${titleVisible ? "visible" : ""}`}>
        Projects
      </h2>
      <p className={`section-subtitle reveal ${titleVisible ? "visible" : ""} stagger-1`}>
        A selection of systems and platforms I've built and contributed to
      </p>
      <div ref={gridRef} className="projects-grid">
        {projects.map((project, i) => (
          <div
            className={`project-card ${project.featured ? "project-card-featured" : ""} reveal-scale ${gridVisible ? "visible" : ""} stagger-${Math.min(i + 1, 7)}`}
            key={i}
          >
            {project.featured && (
              <div className="project-featured-badge">
                <FaStar /> Featured
              </div>
            )}
            <div className="project-card-top">
              <FaFolder className="project-folder-icon" />
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}>
                  <FaArrowUpRightFromSquare />
                </a>
              )}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            {project.highlights && (
              <ul className="project-highlights">
                {project.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            )}
            <div className="project-tech">
              {project.tech.map((t) => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

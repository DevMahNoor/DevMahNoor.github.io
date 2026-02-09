import { projects } from "../data/portfolioData";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-card-header">
              <h3>{project.title}</h3>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}>
                  <FaArrowUpRightFromSquare />
                </a>
              )}
            </div>
            <p className="project-desc">{project.description}</p>
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

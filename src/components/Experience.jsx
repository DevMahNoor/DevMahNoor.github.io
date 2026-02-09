import { experiences } from "../data/portfolioData";
import { FaBriefcase } from "react-icons/fa6";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-marker">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <p className="timeline-company">
                {exp.company} — {exp.location}
              </p>
              <ul className="timeline-highlights">
                {exp.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

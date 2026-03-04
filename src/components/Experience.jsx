import { experiences } from "../data/portfolioData";
import { FaBriefcase } from "react-icons/fa6";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Experience() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [timelineRef, timelineVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="section" id="experience">
      <h2 ref={titleRef} className={`section-title reveal ${titleVisible ? "visible" : ""}`}>
        Work Experience
      </h2>
      <div ref={timelineRef} className={`timeline ${timelineVisible ? "visible" : ""}`}>
        {experiences.map((exp, i) => (
          <div className={`timeline-item reveal ${timelineVisible ? "visible" : ""} stagger-${i + 1}`} key={i}>
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

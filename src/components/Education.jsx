import { education } from "../data/portfolioData";
import { FaGraduationCap } from "react-icons/fa6";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Education() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="section" id="education">
      <h2 ref={titleRef} className={`section-title reveal ${titleVisible ? "visible" : ""}`}>
        Education
      </h2>
      <div ref={gridRef} className="education-grid">
        {education.map((edu, i) => (
          <div className={`education-card reveal-scale ${gridVisible ? "visible" : ""} stagger-${i + 1}`} key={i}>
            <FaGraduationCap className="education-icon" />
            <h3>{edu.degree}</h3>
            <p className="education-institution">{edu.institution}</p>
            <span className="education-period">{edu.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

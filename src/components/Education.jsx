import { education } from "../data/portfolioData";
import { FaGraduationCap } from "react-icons/fa6";

export default function Education() {
  return (
    <section className="section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {education.map((edu, i) => (
          <div className="education-card" key={i}>
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

import { FaCertificate } from "react-icons/fa6";
import useScrollReveal from "../hooks/useScrollReveal";

const certifications = [
  {
    title: "Web Designing and Development",
    issuer: "Technocation Training & Software Development House",
    year: "Jan 2019",
    skills: ["CSS", "HTML5", "Git", "MySQL"],
  },
  {
    title: "PHP and SQL",
    issuer: "TestDome",
    year: "Dec 2021",
    skills: ["PHP", "SQL", "MySQL"],
  },
  {
    title: "PHP",
    issuer: "TestDome",
    year: "Dec 2021",
    skills: ["PHP"],
  },
  {
    title: "MERN Stack Developer",
    issuer: "Softoo Bootcamps",
    year: "Jun 2023",
    skills: ["Node.js", "React.js", "Express.js", "MongoDB"],
  },
];

export default function Certifications() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="section section-alt" id="certifications">
      <h2 ref={titleRef} className={`section-title reveal ${titleVisible ? "visible" : ""}`}>
        Certifications
      </h2>
      <div ref={gridRef} className="certifications-grid">
        {certifications.map(({ title, issuer, year, skills }, i) => (
          <div className={`cert-card reveal-scale ${gridVisible ? "visible" : ""} stagger-${i + 1}`} key={i}>
            <FaCertificate className="cert-icon" />
            <h3 className="cert-title">{title}</h3>
            <p className="cert-issuer">{issuer}</p>
            <span className="cert-year">{year}</span>
            {skills && (
              <div className="cert-skills">
                {skills.map((s) => <span className="tech-tag" key={s}>{s}</span>)}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

import { personalInfo } from "../data/portfolioData";
import { FaCode, FaServer, FaShieldHalved } from "react-icons/fa6";

const highlights = [
  { icon: FaCode, title: "Full-Stack Dev", desc: "5+ years building web & enterprise systems" },
  { icon: FaServer, title: "Backend Expert", desc: "PHP, Laravel, Golang, REST APIs" },
  { icon: FaShieldHalved, title: "Security Focused", desc: "MS in Information Security" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <p className="about-text">{personalInfo.bio}</p>
        <div className="about-highlights">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div className="about-card" key={title}>
              <Icon className="about-card-icon" />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

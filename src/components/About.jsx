import { personalInfo } from "../data/portfolioData";
import { FaCode, FaServer, FaShieldHalved } from "react-icons/fa6";
import useScrollReveal from "../hooks/useScrollReveal";

const highlights = [
  { icon: FaCode, title: "Full-Stack Dev", desc: "5+ years building web & enterprise systems" },
  { icon: FaServer, title: "Backend Expert", desc: "PHP, Laravel, Golang, REST APIs" },
  { icon: FaShieldHalved, title: "Security Focused", desc: "MS in Information Security" },
];

export default function About() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [textRef, textVisible] = useScrollReveal({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="section" id="about">
      <h2 ref={titleRef} className={`section-title reveal ${titleVisible ? "visible" : ""}`}>
        About Me
      </h2>
      <div className="about-container">
        <div ref={textRef} className={`about-text reveal ${textVisible ? "visible" : ""}`}>
          {personalInfo.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div ref={cardsRef} className="about-highlights">
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <div
              className={`about-card reveal-scale ${cardsVisible ? "visible" : ""} stagger-${i + 1}`}
              key={title}
            >
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

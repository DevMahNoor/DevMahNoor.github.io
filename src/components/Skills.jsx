import { skillCategories } from "../data/portfolioData";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Skills() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="section section-alt" id="skills">
      <h2 ref={titleRef} className={`section-title reveal ${titleVisible ? "visible" : ""}`}>
        Skills & Technologies
      </h2>
      <p className={`section-subtitle reveal ${titleVisible ? "visible" : ""} stagger-1`}>
        Technologies I work with to build robust, scalable systems
      </p>
      <div ref={gridRef} className="skills-wrapper">
        {skillCategories.map(({ category, skills }, i) => (
          <div className={`skills-category reveal-scale ${gridVisible ? "visible" : ""} stagger-${i + 1}`} key={category}>
            <h3 className="skills-category-title">{category}</h3>
            <div className="skills-grid">
              {skills.map(({ name, icon: Icon }) => (
                <div className="skill-card" key={name}>
                  <div className="skill-icon-wrapper">
                    <Icon className="skill-icon" />
                  </div>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { skillCategories } from "../data/portfolioData";

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-container">
        {skillCategories.map(({ category, skills }) => (
          <div className="skills-category" key={category}>
            <h3 className="skills-category-title">{category}</h3>
            <div className="skills-grid">
              {skills.map(({ name, icon: Icon }) => (
                <div className="skill-card" key={name}>
                  <Icon className="skill-icon" />
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

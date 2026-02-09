import { Link } from "react-scroll";
import { personalInfo, socialLinks } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">{personalInfo.name}</h1>
        <h2 className="hero-title">{personalInfo.title}</h2>
        <p className="hero-tagline">{personalInfo.tagline}</p>

        <div className="hero-actions">
          <Link to="contact" smooth={true} offset={-80} duration={500} className="btn btn-primary">
            Get In Touch
          </Link>
          <Link to="projects" smooth={true} offset={-80} duration={500} className="btn btn-outline">
            View Projects
          </Link>
        </div>

        <div className="hero-socials">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-avatar">
          <span>MZ</span>
        </div>
      </div>
    </section>
  );
}

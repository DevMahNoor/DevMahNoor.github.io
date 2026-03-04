import { Link } from "react-scroll";
import { personalInfo, socialLinks } from "../data/portfolioData";
import TypeWriter from "./TypeWriter";
import ParticleBackground from "./ParticleBackground";
import { FaDownload, FaLocationDot } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="hero-wrapper" id="hero">
      <ParticleBackground />
      <div className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">{personalInfo.name}</h1>
        <h2 className="hero-title">
          <TypeWriter
            strings={[
              "Full-Stack Backend Developer",
              "PHP & Laravel Expert",
              "Golang Developer",
              "REST API Architect",
            ]}
            typingSpeed={80}
            deletingSpeed={40}
            pauseTime={2000}
          />
        </h2>
        <div className="hero-badge">
          <FaLocationDot /> Islamabad, Pakistan
          <span className="hero-badge-dot" />
          Open to relocate (KSA / Remote)
        </div>
        <p className="hero-tagline">{personalInfo.tagline}</p>

        <div className="hero-actions">
          <Link to="contact" smooth={true} offset={-80} duration={500} className="btn btn-primary">
            Get In Touch
          </Link>
          <Link to="projects" smooth={true} offset={-80} duration={500} className="btn btn-outline">
            View Projects
          </Link>
          <a href="/resume.pdf" download className="btn btn-outline">
            <FaDownload /> Resume
          </a>
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
          <img src="/profile.jpg" alt={personalInfo.name} className="hero-avatar-img" loading="lazy" />
        </div>
      </div>
      </div>
    </section>
  );
}

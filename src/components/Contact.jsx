import { personalInfo, socialLinks } from "../data/portfolioData";
import { FaPaperPlane } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-center">
        <p className="contact-text">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Feel free to reach out!
        </p>
        <div className="contact-details">
          <a href={`mailto:${personalInfo.email}`} className="contact-link">
            <FaPaperPlane /> {personalInfo.email}
          </a>
        </div>
        <div className="contact-socials-row">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-social-link">
              <Icon />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

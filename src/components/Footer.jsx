import { personalInfo, socialLinks } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

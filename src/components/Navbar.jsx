import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaXmark } from "react-icons/fa6";

const navLinks = ["about", "skills", "experience", "projects", "education", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          {"<MZ />"}
        </a>

        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FaXmark /> : <FaBars />}
        </button>

        <ul className={`navbar-links ${open ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setOpen(false)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

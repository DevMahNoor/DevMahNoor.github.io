import { useState } from "react";
import emailjs from "@emailjs/browser";
import { socialLinks } from "../data/portfolioData";
import { FaPaperPlane, FaCheck, FaTriangleExclamation } from "react-icons/fa6";
import useScrollReveal from "../hooks/useScrollReveal";

const EMAILJS_SERVICE = "service_3i9p0rh";
const EMAILJS_TEMPLATE = "template_50m2wcd";
const EMAILJS_KEY = "wJLZma03PhHkD1ERJ";

export default function Contact() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.2 });
  const [formData, setFormData] = useState({ from_name: "", from_email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formData, EMAILJS_KEY)
      .then(() => {
        setStatus("sent");
        setFormData({ from_name: "", from_email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section className="section section-alt" id="contact">
      <h2 ref={titleRef} className={`section-title reveal ${titleVisible ? "visible" : ""}`}>
        Get In Touch
      </h2>
      <div ref={contentRef} className="contact-center">
        <p className={`contact-text reveal ${contentVisible ? "visible" : ""}`}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Feel free to reach out!
        </p>

        <form className={`contact-form reveal ${contentVisible ? "visible" : ""} stagger-1`} onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            value={formData.from_name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            value={formData.from_email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : status === "sent" ? <><FaCheck /> Sent!</> : <><FaPaperPlane /> Send Message</>}
          </button>
          {status === "sent" && <p className="form-status form-success"><FaCheck /> Message sent successfully!</p>}
          {status === "error" && <p className="form-status form-error"><FaTriangleExclamation /> Failed to send. Please try again.</p>}
        </form>

        <div className={`contact-divider reveal ${contentVisible ? "visible" : ""} stagger-2`}>
          <span>or connect directly</span>
        </div>

        <div className={`contact-socials-row reveal ${contentVisible ? "visible" : ""} stagger-3`}>
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

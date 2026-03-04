import { FaQuoteLeft, FaLinkedin } from "react-icons/fa6";
import useScrollReveal from "../hooks/useScrollReveal";

const testimonials = [
  {
    name: "Naveed Ramzan",
    linkedin: "https://www.linkedin.com/in/naveedramzan",
    quote: "I had the pleasure of working with Mahnoor on several projects, and I am continually impressed by their exceptional skills and dedication. Mahnoor is a brilliant coder with a knack for solving complex problems efficiently and creatively. Their ability to collaborate seamlessly with the team and deliver high-quality work consistently is truly commendable. Mahnoor is an asset to any development team, and I highly recommend them for any challenging and innovative projects.",
  },
  {
    name: "Hafsah Kanwal",
    linkedin: "https://www.linkedin.com/in/hafsah-kanwal-77272015b",
    quote: "I highly recommend Mahnoor for her exceptional work in transitioning from PHP to Golang for our recent project. As the Project Manager, I witnessed her quickly grasp new concepts, demonstrating remarkable problem-solving skills and a deep understanding of requirements. She is a true team player, her dedication and attention to detail make tasks easy for everyone. Mahnoor's successful shift from PHP to Go significantly improved our project's performance and scalability. Her adaptability and dedication make her a valuable asset to any team.",
  },
  {
    name: "Maryam Ramzan",
    linkedin: "https://www.linkedin.com/in/maryam-ramzan-31995a11b",
    quote: "I have worked with Mahnoor directly! She is Highly skilled PHP Laravel developer adept at building scalable web applications. She possesses robust problem-solving skills and analytical thinking, enabling her to tackle complex challenges with ease.",
  },
];

export default function Testimonials() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="section" id="testimonials">
      <h2 ref={titleRef} className={`section-title reveal ${titleVisible ? "visible" : ""}`}>
        Testimonials
      </h2>
      <p className={`section-subtitle reveal ${titleVisible ? "visible" : ""} stagger-1`}>
        What colleagues and clients say about working with me
      </p>
      <div ref={gridRef} className="testimonials-grid">
        {testimonials.map(({ name, linkedin, quote }, i) => (
          <div className={`testimonial-card reveal-scale ${gridVisible ? "visible" : ""} stagger-${i + 1}`} key={name}>
            <FaQuoteLeft className="testimonial-quote-icon" />
            <p className="testimonial-text">{quote}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{name.charAt(0)}</div>
              <div>
                <h4 className="testimonial-name">{name}</h4>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="testimonial-linkedin">
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

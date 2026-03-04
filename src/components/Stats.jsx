import { useState, useEffect, useRef } from "react";
import { FaBriefcase, FaRocket, FaUsers } from "react-icons/fa6";
import useScrollReveal from "../hooks/useScrollReveal";

const stats = [
  { icon: FaBriefcase, value: 5, suffix: "+", label: "Years Experience" },
  { icon: FaRocket, value: 7, suffix: "+", label: "Projects Delivered" },
  { icon: FaUsers, value: 10, suffix: "K+", label: "Users Served" },
];

function AnimatedCounter({ target, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const duration = 1500;
    const step = Math.max(1, Math.floor(target / (duration / 30)));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [start, target]);

  return <span>{count}{suffix}</span>;
}

export default function Stats() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-grid">
        {stats.map(({ icon: Icon, value, suffix, label }, i) => (
          <div className={`stat-card reveal-scale ${isVisible ? "visible" : ""} stagger-${i + 1}`} key={label}>
            <Icon className="stat-icon" />
            <h3 className="stat-value">
              <AnimatedCounter target={value} suffix={suffix} start={isVisible} />
            </h3>
            <p className="stat-label">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

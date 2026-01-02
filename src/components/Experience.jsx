import { useEffect, useRef, useState } from "react";

const experienceData = [
  {
    role: "Backend Developer Intern",
    company: "Galvanize Global Education,Chennai",
    duration: "Jan 2023 – Feb 2023",
    description:
      "Built and optimized REST APIs using Spring Boot and improved database performance.",
  },
  {
    role: " JR.SOFTWARE DEVELOPMENT ENGINEER",
    company: "Self-employed",
    duration: "Feb 2023 – Present",
    description:
      "Developed responsive websites and dashboards using Python,Django,Postgresql,AWS etc.",
  },
];

function ExperienceItem({ item, visible, index }) {
  return (
    <div
      style={{ transitionDelay: `${index * 300}ms` }}
      className={`relative pl-8 pb-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <span className="absolute left-0 top-1 w-3 h-3 rounded-full bg-accent dark:bg-accent-dark" />
      <span className="absolute left-[5px] top-4 w-[2px] h-full bg-muted/30 dark:bg-muted-dark/30" />

      <h3 className="text-lg font-semibold">{item.role}</h3>
      <p className="text-sm text-accent dark:text-accent-dark">
        {item.company}
      </p>
      <p className="text-xs text-muted dark:text-muted-dark mb-2">
        {item.duration}
      </p>
      <p className="text-sm text-muted dark:text-muted-dark">
        {item.description}
      </p>
    </div>
  );
}

function Experience() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
      <div className="relative">
        {experienceData.map((item, i) => (
          <ExperienceItem
            key={i}
            item={item}
            index={i}
            visible={visible}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
import { useEffect, useRef, useState } from "react";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institute: "Rajiv Gandhi University Of Knowledge and Technologies(RGUKT)",
    duration: "2019 – 2023",
    cgpa: "9.2 / 10",
    description:
      "Focused on software engineering, databases, and backend development.",
  },
  {
    degree: "Higher Secondary (12th)",
    institute: "Rajiv Gandhi University Of Knowledge and Technologies(RGUKT)",
    duration: "2017 – 2019",
    cgpa: "9.5 / 10",
    description:
      "Specialized in Mathematics, Physics, and Computer Science.",
  },
  {
    degree: "Secondary Education (10th)",
    institute: "ZPHS MANDARADA",
    duration: "2016 – 2017",
    cgpa: "9.8 / 10",
    description:
      "Specialized in Mathematics, Physics, and Computer Science.",
  },
];

function EducationItem({ item, visible, index }) {
  return (
    <div
      style={{ transitionDelay: `${index * 300}ms` }}
      className={`relative pl-8 pb-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <span className="absolute left-0 top-1 w-3 h-3 rounded-full bg-accent dark:bg-accent-dark" />
      <span className="absolute left-[5px] top-4 w-[2px] h-full bg-muted/30 dark:bg-muted-dark/30" />

      <h3 className="text-lg font-semibold">{item.degree}</h3>
      <p className="text-sm text-accent dark:text-accent-dark">
        {item.institute}
      </p>
      <p className="text-xs text-muted dark:text-muted-dark mb-1">
        {item.duration} • CGPA: {item.cgpa}
      </p>
      <p className="text-sm text-muted dark:text-muted-dark">
        {item.description}
      </p>
    </div>
  );
}

function Education() {
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
      <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>
      <div className="relative">
        {educationData.map((item, i) => (
          <EducationItem
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

export default Education;

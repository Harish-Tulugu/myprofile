import { useEffect, useRef, useState } from "react";

const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "REST APIs", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "React", level: 75 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "Postman", level: 80 },
      { name: "Docker", level: 70 },
    ],
  },
];

function SkillBar({ name, level, visible }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1 text-sm">
        <span>{name}</span>
        <span className="text-muted dark:text-muted-dark">{level}%</span>
      </div>

      <div className="w-full h-2 bg-muted/20 dark:bg-muted-dark/20 rounded">
        <div
          className="h-2 rounded bg-accent dark:bg-accent-dark transition-all duration-1000"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="
                relative
                p-8 rounded-2xl
                bg-slate-100 dark:bg-slate-800
                shadow-lg dark:shadow-xl
                transition-all duration-300 ease-out
                hover:-translate-y-1.5 hover:scale-[1.01]
                hover:shadow-2xl dark:hover:shadow-black/60
                hover:z-10
              "
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {group.category}
              </h3>

              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  visible={visible}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

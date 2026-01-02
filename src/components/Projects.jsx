import { useEffect, useRef, useState } from "react";
import port from "../assets/port.jpeg";
import ecom from "../assets/ecom.jpeg";
import task from "../assets/taskmanger.jpeg";

const projectsData = [
  {
    title: "Task Manager API",
    description:
      "A RESTful API for managing tasks with authentication and role-based access.",
    tech: ["Java", "Spring Boot", "JWT", "PostgreSQL"],
    github: "https://github.com/",
    live: null,
    image: task,
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Vite"],
    github: "https://github.com/",
    live: "https://example.com",
    image: port,
  },
  {
    title: "E-commerce Backend",
    description:
      "Scalable backend for an e-commerce system with product, order, and user management.",
    tech: ["Spring Boot", "MySQL", "Docker"],
    github: "https://github.com/",
    live: null,
    image: ecom,
  },
];

function ProjectCard({ project, visible }) {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl bg-surface dark:bg-surface-dark
        shadow-md dark:shadow-lg transform transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        hover:-translate-y-2 hover:shadow-xl
      `}
    >
      {/* Hover border overlay */}
      <div className="pointer-events-none absolute inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-accent/40 dark:border-accent-dark/40" />

      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

        <p className="text-muted dark:text-muted-dark mb-4 text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent dark:text-accent-dark hover:underline"
          >
            GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-accent dark:text-accent-dark hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
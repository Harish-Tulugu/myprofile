import { useEffect, useRef, useState } from "react";

const certsData = [
  {
    title: "Java Spring Boot Certification",
    issuer: "Udemy",
    year: "2024",
    description: "Completed hands-on training on building REST APIs with Spring Boot.",
    link: "https://example.com",
  },
  {
    title: "React & Frontend Development",
    issuer: "Coursera",
    year: "2023",
    description: "Learned modern React, hooks, component architecture and best practices.",
    link: "https://example.com",
  },
  {
    title: "Embedded Systems Training Program by INDAC",
    issuer: "INDAC",
    year: "2022",
    description: "Associated with RGUKT IIIT SRIKAKULAM",
    link: null,
  },
  {
    title: "Python Workshop by APSSDC ",
    issuer: "APSSDC",
    year: "2022",
    description: "Attended python workshop 3 times conducted by APSSDC ",
    link: null,
  },
  {
    title: "Master Class on Machine Learning ",
    issuer: "Pantech Solutions",
    year: "2023",
    description: "It is 1-month Virtual Internship program from Pantech Solutions  ",
    link: null,
  },
  {
    title: "NMMS Scholarship Test ",
    issuer: "central government scheme under the Ministry of Education (MoE)",
    year: "2015",
    description: "Getting 12000 INR per year for 4 years",
    link: null,
  },
  {
    title: "Achieved Gold Medal in SSC",
    issuer: "Board of Secondary Education of Andhra Pradesh (BSEAP)",
    year: "2017",
    description: "Got 20000 INR for excellence in SSC",
    link: null,
  },
  {
    title: "Achived Gold Medal FROM NACL Industries Limited",
    issuer: "NACL Industries Ltd",
    year: "2022",
    description: "Got 20000 INR for excellence in SSC",
    link: null,
  },
  {
    title: "Achived Silver Medal FROM GMR IT ",
    issuer: "GMR IT",
    year: "2017",
    description: "Got price money for excellence in Mathematics Talent Test",
    link: null,
  },
];

function CertCard({ cert, visible }) {
  return (
    <div
      className={`rounded-2xl p-6 bg-surface dark:bg-surface-dark shadow-md dark:shadow-lg transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        hover:-translate-y-1 hover:shadow-xl`}
    >
      <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
      <p className="text-sm text-accent dark:text-accent-dark">
        {cert.issuer} • {cert.year}
      </p>
      <p className="text-sm text-muted dark:text-muted-dark mt-2 mb-3">
        {cert.description}
      </p>

      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-accent dark:text-accent-dark hover:underline"
        >
          View Certificate →
        </a>
      )}
    </div>
  );
}

function Certs() {
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
    <section
      id="certs"
      ref={ref}
      className="min-h-screen px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Certifications & Achievements
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {certsData.map((cert, i) => (
            <CertCard key={i} cert={cert} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certs;

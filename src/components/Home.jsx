import myPic from "../assets/harish.png";
import myResume from "../assets/harishresume.pdf";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-[1.2fr_1.8fr] gap-12 items-center">

        {/* Image + Socials */}
        <div className="flex flex-col items-center scale-110">
          <img
            src={myPic}
            className="w-56 h-56 rounded-full shadow-xl mb-6 object-cover"
          />

          <div className="flex gap-6 text-muted dark:text-muted-dark text-2xl">
            <a
              href="https://www.linkedin.com/in/harish-tulugu-2046b516a/"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 hover:text-[#0A66C2] hover:scale-125 hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/TuluguHarish"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 hover:text-[#0A66C2] hover:scale-125 hover:-translate-y-1"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:harish.tulugu123@gmail.com"
              className="transition-all duration-300 hover:text-accent hover:scale-125 hover:-translate-y-1"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Intro */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Harish Tulugu 👋</h1>

          <p className="text-xl text-accent dark:text-accent-dark mb-4">
            Backend Developer | Full-Stack Learner | AI & ML Enthusiast
          </p>

          <p className="mb-6 text-muted dark:text-muted-dark leading-relaxed">
            I design and build scalable backend systems using Java, Spring Boot, Python, and SQL databases. 
            With a growing focus on AI and machine learning, I enjoy solving complex problems and continuously upgrading my technical skill set.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={myResume}
              download
              className="px-6 py-3 rounded-lg bg-accent dark:bg-accent-dark text-white hover:opacity-90 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-accent dark:border-accent-dark text-accent dark:text-accent-dark hover:bg-accent/10 dark:hover:bg-accent-dark/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
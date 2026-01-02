
import { useState, useEffect } from "react";

function Navbar({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = ["home", "skills", "projects", "ed&exp", "certs", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      for (const id of links) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollY >= top && scrollY < top + height) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="
        fixed top-0 w-full z-50 
        bg-surface/80 dark:bg-surface-dark/80 
        backdrop-blur 
        shadow-sm dark:shadow-lg
        dark:border-b dark:border-white/20
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg">Harish</span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`group relative pb-1 capitalize transition-all duration-200
                hover:text-accent dark:hover:text-accent-dark
                hover:-translate-y-0.5 hover:scale-105
                ${active === link ? "text-accent dark:text-accent-dark" : ""}
              `}
            >
              {link}
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-accent dark:bg-accent-dark transition-all duration-300
                  ${active === link ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </a>
          ))}

          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-2 text-xl hover:scale-110 transition"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-surface/90 dark:bg-surface-dark/90 backdrop-blur">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setIsOpen(false)}
              className={`capitalize transition-all duration-200 hover:text-accent dark:hover:text-accent-dark hover:translate-x-1 ${
                active === link ? "text-accent dark:text-accent-dark font-semibold" : ""
              }`}
            >
              {link}
            </a>
          ))}

          <button
            onClick={() => setIsDark(!isDark)}
            className="text-xl mt-2 self-start hover:scale-110 transition"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

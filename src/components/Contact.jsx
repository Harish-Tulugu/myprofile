import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
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
      id="contact"
      ref={ref}
      className="min-h-screen px-6 py-24 flex items-center justify-center"
    >
      <div
        className={`max-w-5xl w-full grid md:grid-cols-2 gap-12 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted dark:text-muted-dark mb-6">
            Feel free to reach out for opportunities, collaboration, or just a
            friendly chat 👋
          </p>

          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-accent dark:text-accent-dark" />
              <span>tulugu.harish123@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-accent dark:text-accent-dark" />
              <span>+91 7901525125</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-accent dark:text-accent-dark" />
              <span>Akkarapalli(V),Santhakaviti(M),Vizianagaram(dist), Andhara Pradesh, India,53123</span>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-surface dark:bg-surface-dark rounded-2xl shadow-lg p-8 space-y-5"
        >
          <div>
            <label className="text-sm text-muted dark:text-muted-dark">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full mt-1 px-4 py-2 rounded-lg bg-transparent border border-muted/30 dark:border-muted-dark/30 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark"
            />
          </div>

          <div>
            <label className="text-sm text-muted dark:text-muted-dark">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full mt-1 px-4 py-2 rounded-lg bg-transparent border border-muted/30 dark:border-muted-dark/30 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark"
            />
          </div>

          <div>
            <label className="text-sm text-muted dark:text-muted-dark">
              Message
            </label>
            <textarea
              rows="4"
              required
              className="w-full mt-1 px-4 py-2 rounded-lg bg-transparent border border-muted/30 dark:border-muted-dark/30 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-accent dark:bg-accent-dark text-white font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

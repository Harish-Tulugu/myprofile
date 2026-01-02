import Experience from "./Experience";
import Education from "./Education";

function TimelineSection() {
  return (
    <section
      id="ed&exp"
      className="min-h-screen px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        <Experience />
        <Education />
      </div>
    </section>
  );
}

export default TimelineSection;

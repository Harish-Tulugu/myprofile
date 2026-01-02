import { useState } from "react"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import TimelineSection from "./components/TimelineSection";
import Certs from "./components/Certs";
import Contact from "./components/Contact";

function App() {  
  const [isDark, setIsDark] = useState(false);

  return (
    <>
     <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-bg text-text dark:bg-bg-dark dark:text-text-dark transition-colors duration-300">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Home />
        <Skills />
        <Projects />
        <TimelineSection/>
        <Certs/>
        <Contact/>
      </div>
    </div>
    </>
   
   
  )
}

export default App
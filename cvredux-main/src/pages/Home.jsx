import { useState } from "react";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import More from "../components/More";
import { CV } from "../cv/cv";
const { hero, experience, languages, habilities, volunteer } = CV;

const Home = () => {
    const [showEducation, setShowEducation] = useState(true);
  return (
    <>
        <Hero hero={hero} />
      <About hero={hero} />
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(true)}
      >
        Education
      </button>
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(false)}
      >
        Experience
      </button>
      <div>
        {showEducation ? (
          <Education />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
    </>
  )
}

export default Home
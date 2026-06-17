import React, { useState } from "react";
import Info from "./components/Info";
import Education from "./components/Education";
import Projects from "./components/Projects";
import cvData from "./data/cvData";
import 'bulma/css/bulma.css'
import './components/cv.css'

const App = () => {
  const [name, setName] = useState('')
  const [university, setUniversity] = useState('')
  const [degree, setDegree] = useState('')
  const [selfTaught, setSelfTaught] = useState('')
  const [projects, setProjects] = useState([])

  const handleMagicFill = () => {
    setName(cvData.personalInfo.name)
    setUniversity(cvData.education.university)
    setDegree(cvData.education.degree)
    setSelfTaught(cvData.education.selfTaught)
    setProjects(cvData.projects.map((p) => ({ ...p })))
  }

  const handleReset = () => {
    setName('')
    setUniversity('')
    setDegree('')
    setSelfTaught('')
    setProjects('')
  }

  return (
    <div className="container">
      <section className="section">
        <p>Fill out your CV below. Running out of ideas?</p>
        <div class="buttons">
<button onClick={handleMagicFill} className="button is-info">
          I'm feeling LUCKY ✨
        </button>
        <button onClick={handleReset} className="button is-info">
          Reset
        </button>
        </div>
        
      </section>
      <Info name={name} setName={setName} />
      <Education
        university={university}
        setUniversity={setUniversity}
        degree={degree}
        setDegree={setDegree}
        selfTaught={selfTaught}
        setSelfTaught={setSelfTaught}
      />
      <Projects projects={projects} setProjects={setProjects} />
    </div>
  )
}

export default App;

import React from "react";
import Info from "./components/Info";
import Education from "./components/Education";
import  Projects from "./components/Projects";
import 'bulma/css/bulma.css'
import './components/cv.css'
const App = () => {
  

  return (
    <div class="container">
      
      <Info />
      <Education />
      <Projects />
    </div>
  )
  
}

export default App;

import React, { Component } from "react";
import Info from "./components/Info";
import Education from "./components/Education";
import Projects from "./components/Projects";
class App extends Component {
  constructor(){
    super();

    
  }

  render(){
    return (
      <div id="cv">
        <Info />
        <Education />
        <Projects />
      </div>
    )
  }

}

export default App;

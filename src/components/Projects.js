import React from "react";
import ProjectCard from "./ProjectCard.js"

// TODO: refactor this to a section of many cards
// - make a button to create new cards, perhaps a new class?
class Projects extends React.Component{
  constructor(props){
    super(props);
    this.state={
      category: [],
      addCard: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNewCard = this.handleNewCard.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  handleNewCard(event){
    event.preventDefault();
    this.setState({addCard: true});
  }



  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.addCard && !prevState.addCard) {
  //     console.log("component");
  //     //this.setState({addCard: false});

  //   }
  // }

  render(){
    if(this.state.addCard){
      return <ProjectCard />

    }
    else{
      return (
        <button onClick={this.handleNewCard} className="button is-primary">Add Project</button>
      );
    }
  }



}
export default Projects;
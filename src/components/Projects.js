import React, { Fragment } from "react";
import ProjectCard from "./ProjectCard.js"

// TODO: refactor this to a section of many cards
// - make a button to create new cards, perhaps a new class?
class Projects extends React.Component{
  constructor(props){
    super(props);
    this.state={
      numCards: 0,

    };
    this.handleNewCard = this.handleNewCard.bind(this);
    this.initCards = this.initCards.bind(this);
  }
  
  handleNewCard(event){
    event.preventDefault();
    this.setState({numCards: this.state.numCards+1});
  }

  initCards(){
    let cards = [];
    for (let i = 0; i < this.state.numCards; i++) {
      cards.push(<ProjectCard/>)
    }
    return cards;

  }

  render(){
    if(this.state.numCards > 0){
      return (
        <Fragment>
          {this.initCards()}
          <button onClick={this.handleNewCard} className="button is-primary">Add Project</button>

        </Fragment>
        );

    }
    else{
      return (
        <button onClick={this.handleNewCard} className="button is-primary">Add Project</button>
      );
    }
  }



}
export default Projects;
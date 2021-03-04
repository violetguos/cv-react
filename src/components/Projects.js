import { useState } from 'react'; 
import React from "react";


// TODO: refactor this to a section of many cards
// - make a button to create new cards, perhaps a new class?
class Projects extends React.Component{
  constructor(props){
    super(props);
    this.state={
      editMode: true,
      name: '',
      url:'',
      repo:'',
      description:'',
      libraries:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event){
    event.preventDefault();
    this.setState({editMode: !this.state.editMode});
  }

  render(){
    if(this.state.editMode){
      return (
        <section class="section">
          <h2 class="title">Projects</h2>
          <form onSubmit={this.handleSubmit} class="box">
            <div class="field">
              <div class="control">

              <label htmlFor="nameInput" class="label">Name</label>
              <input type="text" value={this.state.name} onChange={this.handleChange} class="input" name="name" />

              <label htmlFor="nameInput" class="label">url</label>

              <input type="text" value={this.state.url} onChange={this.handleChange} class="input" name="url"/>

              <label htmlFor="nameInput" class="label">description</label>

              <input type="text" value={this.state.description} onChange={this.handleChange} class="input" name="description" />
              </div>
            </div>
            <button type="submit" class="button is-primary">Update</button>
          </form>
        </section>
          
      );
    }else{
      return (
        <section class="section">
          <h2 class="title">Education</h2>
          
          <div class="card">
            <div class="card-content">
              
              <label htmlFor="nameInput" class="label">Name</label>
              <p>{this.state.name}</p>
              <label htmlFor="nameInput" class="label">url</label>
              <p>{this.state.url}</p> 
              <label htmlFor="nameInput" class="label">description</label>
              <p>{this.state.description}</p>           
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                <button onClick={this.handleSubmit} class="button is-primary">Update</button>
                </span>
              </p>
            </footer>
          </div> 
        </section>
      );
    }
  }

}
export default Projects;
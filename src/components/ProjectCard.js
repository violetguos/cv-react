import React from "react";


// TODO: refactor this to a section of many cards
// - make a button to create new cards, perhaps a new class?
class ProjectCard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      editMode: true,
      name: '',
      url:'',
      repo:'',
      description:'',
      category:'',
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

  handleTag(event){
    event.preventDefault();
    this.setState({editMode: !this.state.editMode});

  }

  render(){
    if(this.state.editMode){
      return (
        <section className="section">
          <h2 className="title">Projects</h2>
          <form onSubmit={this.handleSubmit} className="box">
            <div className="field">
              <div className="control">

              <label htmlFor="nameInput" className="label">Name</label>
              <input type="text" value={this.state.name} onChange={this.handleChange} className="input" name="name" />

              <label htmlFor="nameInput" className="label">url</label>

              <input type="text" value={this.state.url} onChange={this.handleChange} className="input" name="url"/>

              <label htmlFor="nameInput" className="label">description</label>

              <input type="text" value={this.state.description} onChange={this.handleChange} className="input" name="description" />
              </div>
            </div>
            <button type="submit" className="button is-primary">Update</button>
          </form>
        </section>
          
      );
    }else{
      return (
        <section className="section">
          <h2 className="title">Projects</h2>
          
          <div className="card">
            <div className="card-content">
              
              <label htmlFor="nameInput" className="label">Name</label>
              <p>{this.state.name}</p>
              <label htmlFor="nameInput" className="label">url</label>
              <a href={this.state.url}>{this.state.url}</a>
              <label htmlFor="nameInput" className="label">description</label>
              <p>{this.state.description}</p>           
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <span>
                <button onClick={this.handleSubmit} className="button is-primary">Update</button>
                </span>
              </p>
            </footer>
          </div> 
        </section>
      );
    }
  }

}
export default ProjectCard;
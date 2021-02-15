import React from "react";

class Education extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', editMode: true};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      event.preventDefault();

      this.setState({editMode: !this.state.editMode})
      
    }
  
    render() {
      console.log(this.state.editMode);
      if(this.state.editMode){
        return (
        <section>
          <h2>Education</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <button type="submit">Update</button>
          </form>
        </section>
          
        );
      }
      else{
        return (
          <section>
            <h2>Education</h2>
            <p>{this.state.value}</p>
            <button onClick={this.handleSubmit}>Update</button>
          </section>
        )
      }
      
    }
}
export default Education;

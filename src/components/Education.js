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
      this.setState({editMode: false})
    }
  
    render() {
    
      if(this.state.editMode){
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Education:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
      else{
        return (
          <p>{this.state.value}</p>
        )
      }
      
    }
}
export default Education;

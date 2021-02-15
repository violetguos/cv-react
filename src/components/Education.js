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
      if(this.state.editMode){
        return (
        <section class="section">
          <h2 class="title">Education</h2>
          <form onSubmit={this.handleSubmit} class="box">
            <div class="field">
              <label htmlFor="nameInput" class="label">University</label>

              <div class="control">


                <input type="text" value={this.state.value} onChange={this.handleChange} class="input"/>
              </div>
            </div>
            <button type="submit" class="button is-primary">Update</button>
          </form>
        </section>
          
        );
      }
      else{
        return (
          <section>
            <h2 class="title">Education</h2>
            
            <div class="card">
              <div class="card-content">
                <p>
                  {this.state.value}
                </p>            
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
        )
      }
      
    }
}
export default Education;

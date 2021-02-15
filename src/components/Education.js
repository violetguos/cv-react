import React from "react";

class Education extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '', 
        degree: '',
        selfTaught: '',
        editMode: true
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {       
      this.setState({
        [event.target.name]: event.target.value
      });  
    }
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
              <div class="control">

              <label htmlFor="nameInput" class="label">University</label>
              <input type="text" value={this.state.value} onChange={this.handleChange} class="input" name="value" />

              <label htmlFor="nameInput" class="label">Degree</label>

              <input type="text" value={this.state.degree} onChange={this.handleChange} class="input" name="degree"/>

              <label htmlFor="nameInput" class="label">Self taught programs</label>

              <input type="text" value={this.state.selfTaught} onChange={this.handleChange} class="input" name="selfTaught" />
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
                
                <label htmlFor="nameInput" class="label">University</label>
                <p>{this.state.value}</p>
                <label htmlFor="nameInput" class="label">Degree</label>
                <p>{this.state.degree}</p> 
                <label htmlFor="nameInput" class="label">Self taught programs</label>
                <p>{this.state.selfTaught}</p>           
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

import React, {Component} from "react";

class Info extends Component {
  constructor(props){
    super(props);

    this.state={
      submitted: false,
      name: props.name,
      phone: props.phone,
      email: props.email
    }
    this.onEdit = this.onEdit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.display = this.display.bind(this);
  }

  onEdit = (e) =>{
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitted: true,
      name: "maru"

    })
  };

  display(){
    let element = '';
    element = <p>{this.state.name}</p>;
    return element;
  }

  render(){
    if(!this.state.submitted){
      return (
        <div>
          <form onSubmit={this.onSubmit.bind(this)}>
            <label htmlFor="info">Enter your info</label>
            <input 
              onChange={this.onEdit}
              value={this.state.name}
              type="text" 
              // need id to be this to enter input
              id={this.props.name}
            />
            
            <button type="submit">
              Add name
            </button>
          </form>
          
        </div>
      )
    }
    else{
      return this.display();
    }
      
   

    
  }
}
export default Info;
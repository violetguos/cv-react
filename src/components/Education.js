import { useState } from "react";

const Education = () => {
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [selfTaught, setSelfTaught] = useState("");
  const [editMode, setEditMode] = useState(true);

  const fields = [
    {
      label: "University",
      key: "university",
      value: university,
      onChange: setUniversity,
    },
    { label: "Degree", key: "degree", value: degree, onChange: setDegree },
    {
      label: "Self Taught",
      key: "selfTaught",
      value: selfTaught,
      onChange: setSelfTaught,
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };

  if (editMode) {
    return (
      <section className="section">
        <h2 className="title">Education</h2>
        <form onSubmit={onSubmit} className="box">
          {fields.map((f) => (
            <div className="field" key={f.key}>
              <label htmlFor={`${f.key}Input`} className="label">
                {f.label}
              </label>
              <div className="control">
                <input
                  id={`${f.key}Input`}
                  className="input"
                  type="text"
                  value={f.value}
                  onChange={(e) => f.onChange(e.target.value)}
                />
              </div>
            </div>
          ))}
        </form>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="title">Education</h2>
      <div className="card">
        <div className="card-content">
          {fields.map((f) => (
            <div key={f.key}>
              <label className="label">{f.label}</label>
              <p>{f.value}</p>
            </div>
          ))}
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              <button onClick={onSubmit} className="button is-primary">
                Update
              </button>
            </span>
          </p>
        </footer>
      </div>
    </section>
  );
};

// class Education extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         value: '',
//         degree: '',
//         selfTaught: '',
//         editMode: true
//       };

//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//       this.setState({
//         [event.target.name]: event.target.value
//       });
//     }
//     handleSubmit(event) {
//       event.preventDefault();

//       this.setState({editMode: !this.state.editMode});

//     }

//     render() {
//       if(this.state.editMode){
//         return (
//         <section className="section">
//           <h2 className="title">Education</h2>
//           <form onSubmit={this.handleSubmit} className="box">
//             <div className="field">
//               <div className="control">

//               <label htmlFor="nameInput" className="label">University</label>
//               <input type="text" value={this.state.value} onChange={this.handleChange} class="input" name="value" />

//               <label htmlFor="nameInput" className="label">Degree</label>

//               <input type="text" value={this.state.degree} onChange={this.handleChange} class="input" name="degree"/>

//               <label htmlFor="nameInput" className="label">Self taught programs</label>

//               <input type="text" value={this.state.selfTaught} onChange={this.handleChange} class="input" name="selfTaught" />
//               </div>
//             </div>
//             <button type="submit" className="button is-primary">Update</button>
//           </form>
//         </section>

//         );
//       }
//       else{
//         return (
//           <section class="section">
//             <h2 class="title">Education</h2>

//             <div class="card">
//               <div class="card-content">

//                 <label htmlFor="nameInput" class="label">University</label>
//                 <p>{this.state.value}</p>
//                 <label htmlFor="nameInput" class="label">Degree</label>
//                 <p>{this.state.degree}</p>
//                 <label htmlFor="nameInput" class="label">Self taught programs</label>
//                 <p>{this.state.selfTaught}</p>
//               </div>
//               <footer class="card-footer">
//                 <p class="card-footer-item">
//                   <span>
//                   <button onClick={this.handleSubmit} class="button is-primary">Update</button>
//                   </span>
//                 </p>
//               </footer>
//             </div>
//           </section>
//         );
//       }

//     }
// }
export default Education;

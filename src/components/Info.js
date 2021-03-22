import { useState } from 'react' 

const Info = () => {
  const [name, setName] = useState('');
  const [editMode, setEditMode] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  }
  if(editMode){
    return (
      <section className="section">
        <h2 className="title">Personal Info</h2>
        <form onSubmit={onSubmit} className="box">
          <div className="field">
            <label htmlFor="nameInput" className="label">Name</label>
              <div className="control">
                <input 
                  onChange={(e)=> setName(e.target.value)}
                  value={name}
                  type="text" 
                  id="nameInput"
                  className="input"
                />
              </div>
          </div>
          <button type="submit" className="button is-primary">
            Update
          </button>
        </form>
      </section>
    )
  }
  else{
    return (
      <section className="section">
        <h2 className="title">Personal Info</h2>
        <div className="card">
          <div className="card-content">
            <h3 className="title">
              {name}
            </h3>            
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                <button onClick={onSubmit} className="button is-primary">Update</button>
              </span>
            </p>
          </footer>
        </div>        
      </section>
    )
  }
  
}
export default Info;
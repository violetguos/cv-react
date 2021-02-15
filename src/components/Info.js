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
        <form onSubmit={onSubmit} class="box">
          <div class="field">
            <label htmlFor="nameInput" class="label">Name</label>
              <div class="control">
                <input 
                  onChange={(e)=> setName(e.target.value)}
                  value={name}
                  type="text" 
                  id="nameInput"
                  class="input"
                />
              </div>
          </div>
          <button type="submit" class="button is-primary">
            Update
          </button>
        </form>
      </section>
    )
  }
  else{
    return (
      <section class="section">
        <h2 class="title">Personal Info</h2>
        <div class="card">
          <div class="card-content">
            <h3 class="title">
              {name}
            </h3>            
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <button onClick={onSubmit} class="button is-primary">Update</button>
              </span>
            </p>
          </footer>
        </div>        
      </section>
    )
  }
  
}
export default Info;
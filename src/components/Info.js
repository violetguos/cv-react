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
      <section>
        <h2>Personal Info</h2>
        <form onSubmit={onSubmit}>
        <label htmlFor="nameInput">Name</label>
        <input 
          onChange={(e)=> setName(e.target.value)}
          value={name}
          type="text" 
          id="nameInput"
        />
        <button type="submit">
          Update
        </button>
        </form>
      </section>
    )
  }
  else{
    return (
      <section>
        <h2>Personal Info</h2>
        <p>Name: {name}</p>
        <button onClick={onSubmit}>Update</button>
      </section>
    )
  }
  
}
export default Info;
import { useState } from 'react' 

const Info = () => {
  const [name, setName] = useState('');
  const [editMode, setEditMode] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  }
  if(editMode){
    return (
      <div>
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
      </div>
    )
  }
  else{
    return (
      <p>Name: {name}</p>
    )
  }
  
}
export default Info;
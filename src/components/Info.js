import { useState } from 'react' 

const Info = () => {
  const [name, setName] = useState('');
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(name);
  }

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
export default Info;
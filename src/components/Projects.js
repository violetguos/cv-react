import { useState } from 'react' 

// attempt to create a table of skills
// maybe: https://www.pluralsight.com/guides/dynamic-tables-from-editable-columns-in-react-html
const Projects = () =>{
    const [skills, setSkill] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(typeof(skills));
        setSkill(skills.push(e.target.value));
    }
    return (
        <form onSubmit={onSubmit} class="box">
          <div class="field">
            <label htmlFor="nameInput" class="label">Name</label>
              <div class="control">
                <input 
                  onChange={(e)=> setSkill(e.target.value)}
                  value={skills}
                  type="text" 
                  class="input"
                />
              </div>
          </div>
          <button type="submit" class="button is-primary">
            Update
          </button>
        </form>
    )
}

export default Projects;
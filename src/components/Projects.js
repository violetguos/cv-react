import { Fragment } from 'react'
import ProjectCard from './ProjectCard.js'

const Projects = ({ projects, setProjects }) => {
  const handleNewCard = (e) => {
    e.preventDefault()
    setProjects([...projects, { name: '', url: '', repo: '', description: '', category: '' }])
  }

  const handleChange = (idx, key, value) => {
    setProjects(projects.map((p, i) => (i === idx ? { ...p, [key]: value } : p)))
  }

  return (
    <Fragment>
      {projects.map((p, i) => (
        <ProjectCard key={i} project={p} onChange={(key, value) => handleChange(i, key, value)} />
      ))}
      <button onClick={handleNewCard} className="button is-primary">Add Project</button>
    </Fragment>
  )
}

export default Projects
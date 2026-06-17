import { useState } from 'react'

const ProjectCard = ({ project, onChange }) => {
  const [editMode, setEditMode] = useState(true)

  const fields = [
    { label: 'Name', key: 'name', value: project.name, onChange: (v) => onChange('name', v) },
    { label: 'url', key: 'url', value: project.url, onChange: (v) => onChange('url', v) },
    { label: 'repo', key: 'repo', value: project.repo, onChange: (v) => onChange('repo', v) },
    { label: 'description', key: 'description', value: project.description, onChange: (v) => onChange('description', v) },
    { label: 'category', key: 'category', value: project.category, onChange: (v) => onChange('category', v) },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setEditMode(!editMode)
  }

  if (editMode) {
    return (
      <section className="section">
        <h2 className="title">Projects</h2>
        <form onSubmit={handleSubmit} className="box">
          <div className="field">
            <div className="control">
              {fields.map((f) => (
                <div key={f.key}>
                  <label htmlFor={`${f.key}Input`} className="label">{f.label}</label>
                  <input
                    id={`${f.key}Input`}
                    type="text"
                    value={f.value}
                    onChange={(e) => f.onChange(e.target.value)}
                    className="input"
                    name={f.key}
                  />
                </div>
              ))}
            </div>
          </div>
          <button type="submit" className="button is-primary">Update</button>
        </form>
      </section>
    )
  }

  return (
    <section className="section">
      <h2 className="title">Projects</h2>
      <div className="card">
        <div className="card-content">
          {fields.map((f) => (
            <div key={f.key}>
              <label className="label">{f.label}</label>
              {f.key === 'url' || f.key === 'repo' ? (
                <p><a href={f.value}>{f.value}</a></p>
              ) : (
                <p>{f.value}</p>
              )}
            </div>
          ))}
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              <button onClick={handleSubmit} className="button is-primary">Update</button>
            </span>
          </p>
        </footer>
      </div>
    </section>
  )
}

export default ProjectCard
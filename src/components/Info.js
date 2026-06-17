import { useState } from 'react'

const Info = () => {
  const [name, setName] = useState('')
  const [editMode, setEditMode] = useState(true)

  const fields = [
    { label: 'Name', key: 'name', value: name, onChange: setName },
  ]

  const onSubmit = (e) => {
    e.preventDefault()
    setEditMode(!editMode)
  }

  if (editMode) {
    return (
      <section className="section">
        <h2 className="title">Personal Info</h2>
        <form onSubmit={onSubmit} className="box">
          {fields.map((f) => (
            <div className="field" key={f.key}>
              <label htmlFor={`${f.key}Input`} className="label">{f.label}</label>
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
          <button type="submit" className="button is-primary">Update</button>
        </form>
      </section>
    )
  }

  return (
    <section className="section">
      <h2 className="title">Personal Info</h2>
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
              <button onClick={onSubmit} className="button is-primary">Update</button>
            </span>
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Info
import { useState } from 'react'

const Education = ({ university, setUniversity, degree, setDegree, selfTaught, setSelfTaught }) => {
  const [editMode, setEditMode] = useState(true)

  const fields = [
    { label: 'University', key: 'university', value: university, onChange: setUniversity },
    { label: 'Degree', key: 'degree', value: degree, onChange: setDegree },
    { label: 'Self taught programs', key: 'selfTaught', value: selfTaught, onChange: setSelfTaught },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setEditMode(!editMode)
  }

  if (editMode) {
    return (
      <section className="section">
        <h2 className="title">Education</h2>
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
              <button onClick={handleSubmit} className="button is-primary">Update</button>
            </span>
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Education
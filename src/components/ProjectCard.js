import { useState } from "react";

const ProjectCard = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [editMode, setEditMode] = useState("");

  const fields = [
    { label: "Name", key: "name", value: name, onChange: setName },
    { label: "URL", key: "url", value: url, onChange: setUrl },
    {
      label: "Description",
      key: "description",
      value: description,
      onChange: setDescription,
    },
    {
      label: "Category",
      key: "category",
      value: category,
      onChange: setCategory,
    },
  ];
  const onSubmit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };

  if (editMode) {
    return (
      <section className="section">
        <h2 className="title">Projects</h2>
        <form onSubmit={onSubmit} className="box">
          {fields.map((f) => (
            <div className="field" key={f.key}>
              <label htmlFor={`${f.key}Input`} className="label">
                {f.label}
              </label>
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

          <button type="submit" className="button is-primary">
            Update
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="title">Projects</h2>

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
              <button onClick={onSubmit} className="button is-primary">
                Update
              </button>
            </span>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default ProjectCard;

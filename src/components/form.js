import { useState } from "react";

export default function Form({ onSubmit }) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      priority,
      isCompleted: false,
      id: Date.now(),
    };
    onSubmit(newItem);
    setDescription("");
    setPriority(1);
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <div className="actions">
          <select
            value={priority}
            onChange={(e) => setPriority(Number(e.target.value))}
          >
            <option value={1}>High priority</option>
            <option value={2}>Medium priority</option>
            <option value={3}>Low priority</option>
          </select>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

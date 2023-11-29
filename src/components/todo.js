export default function Todo({
  description,
  id,
  isCompleted,
  priority,
  onToggle,
  onDelete,
}) {
  return (
    <div className="container">
      <div
        className="todo"
        style={{
          backgroundColor:
            priority === 1 ? "#FA6A6A" : priority === 2 ? "#F9B506" : "#4DCD90",
        }}
      >
        <div className="todo-text">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => onToggle(id, e.target.checked)}
          ></input>
          <span className="checkmark"></span>
          <p
            checked={isCompleted}
            style={{ textDecoration: isCompleted ? "line-through" : "" }}
          >
            {description}
          </p>
        </div>
        <div className="delete-btn" onClick={() => onDelete(id)}>
          <i className="fa-solid fa-trash" style={{ color: "#ffffff" }}></i>
        </div>
      </div>
    </div>
  );
}

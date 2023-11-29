import { useState } from "react";
import Todo from "./todo";

export default function ToDoList({ items, onToggle, onDelete, onClear }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItem;

  if (sortBy === "input") {
    sortedItem = items;
  }
  if (sortBy === "completed") {
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
  }
  if (sortBy === "priority") {
    sortedItem = items.slice().sort((a, b) => a.priority - b.priority);
  }

  return (
    <>
      <div className="todo-container">
        {sortedItem.map((item) => (
          <Todo
            description={item.description}
            id={item.id}
            isCompleted={item.isCompleted}
            priority={item.priority}
            onToggle={onToggle}
            onDelete={onDelete}
            key={item.id}
          />
        ))}
        {sortedItem.length >= 2 ? (
          <div className="action-btn container">
            <button className="clear-btn" onClick={onClear}>
              Clear all
            </button>
            <select
              className="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value={"completed"}>Sort by completed</option>
              <option value={"priority"}>Sort by priority</option>
              <option value={"input"}>Sort by input order</option>
            </select>
          </div>
        ) : (
          false
        )}
      </div>
    </>
  );
}

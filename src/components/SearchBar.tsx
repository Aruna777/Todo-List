import { useState } from "react";
import "./SearchBar.css";

export function SearchBar() {
  const [userValue, setUserValue] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);


  const handleAddTask = () => {
    if (!userValue.trim()) return;

    setTasks((prev) => [...prev, userValue]);
    setUserValue("");
  };

  const handleDeleteTask = (index: number) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    const newTask = prompt("Edit task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
      setTasks((prev) =>
        prev.map((task, i) => (i === index ? newTask : task))
      );
    }
  };

  return (
    <div className="search-bar">
      <div className="input-row">
        <input
          type="text"
          placeholder="Add a new task..."
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <span className="task-text">{task}</span>
            <button
              className="delete-btn"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
            <button className="delete-btn" onClick={() => handleEdit(index)}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
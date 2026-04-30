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
          </div>
        ))}
      </div>
    </div>
  );
}

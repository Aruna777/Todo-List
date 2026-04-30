import { useState } from "react";
import "./SearchBar.css";

export function SearchBar() {
  const [uservalue, setUservalue] = useState("");
  const [isNewTask, setIsNewTask] = useState<string[]>([]);

  const handleAddTask = () => {
    if (uservalue.trim() !== "") {
      // Logic to add the task to the list
      setIsNewTask([...isNewTask, uservalue]);
      console.log("Task added:", uservalue);
      setUservalue("");
    }
  };
  return (
    <div className="search-bar">
      <div className="input-row">
        <input
          type="text"
          placeholder="Add a new task..."
          value={uservalue}
          onChange={(e) => setUservalue(e.target.value)}
        />
        <button className="input-row button " onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div className="task-list">
        {isNewTask.map((task, index) => (
          <div key={index} className="task-item">
            {task}
          </div>
        ))}
      </div>
    </div>
  );
}

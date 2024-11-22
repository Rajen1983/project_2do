import React from "react";
import './TaskItem.css';

function TaskItem({ task, handleComplete, handleDelete }) {
  return (
    <li className="task-item">
      <label className={`task-item-text ${task.isCompleted ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => handleComplete(task.id)}
        />
        {task.text}
      </label>
      <button
        className="task-item-button delete"
        onClick={() => handleDelete(task.id)}
      >
        पूर्ण रूप से हटाए 
      </button>
    </li>
  );
}

export default TaskItem;

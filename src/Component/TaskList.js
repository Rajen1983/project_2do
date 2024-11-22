import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, handleComplete, handleDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;

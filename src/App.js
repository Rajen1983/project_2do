import './App.css';
import React, { useState } from "react";
import Taskinput from './Component/Taskinput';
import TaskList from './Component/TaskList';

function App() {
  

  const [tasks, setTasks] = useState([]);

  
  const handleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };


  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

 
  const handleAddTask = (newTask) => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: tasks.length + 1, 
        text: newTask,
        isCompleted: false,
      };
      setTasks([...tasks, newTaskObj]);  
    }
  };

  return (
    <div className="App">
      <h1>पुलिस अधिकारी द्वारा किये गये कार्यो की सूची</h1>

      <Taskinput handleAddTask={handleAddTask} />

    
      {tasks.length > 0 && (
        <TaskList
          tasks={tasks}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default App;

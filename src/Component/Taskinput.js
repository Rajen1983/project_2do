import React, { useState } from "react";
import './Taskinput.css';
function Taskinput({ handleAddTask }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = () => {
    handleAddTask(newTask);
    setNewTask(""); 
  };

  return (
    <div className="task-input-container" style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="दिया गया कार्य यहाँ लिखे "
        
        // style={{
        //   padding: "8px",
        //   marginRight: "10px",
        //   width: "300px",
        //   borderRadius: "4px",
        // }}
        className="task-input"
      />
      <button className="task-input-button" onClick={handleSubmit} style={{ padding: "8px", cursor: "pointer" }}>
      नया कार्य यहाँ से जोड़े 
      </button>
    </div>
  );
}

export default Taskinput;

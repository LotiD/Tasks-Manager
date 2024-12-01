import React from "react";

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task-item ${task.status}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onToggle(task.id)}>
        {task.status === "pending" ? "Complete" : "Undo"}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;

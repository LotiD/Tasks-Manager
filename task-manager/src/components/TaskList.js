import React, { useState } from "react";
import TaskItem from "./TaskItem";
import SortStrategy from "../services/SortStrategy";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  const [sortMethod, setSortMethod] = useState("status");

  const sortedTasks =
    sortMethod === "status"
      ? SortStrategy.sortByStatus(tasks)
      : SortStrategy.sortAlphabetically(tasks);

  return (
    <div>
      <div className="sort-button">
        <button onClick={() => setSortMethod("status")}>Sort by Status</button>
        <button onClick={() => setSortMethod("alpha")}>Sort Alphabetically</button>
      </div>
      {sortedTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TaskList;

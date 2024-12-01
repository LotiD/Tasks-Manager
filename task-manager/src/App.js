import React, { useState } from "react";
import TaskManager from "./services/TaskManager";
import TaskList from "./components/TaskList";
import Notification from "./components/Notification";
import './styles.css';


const App = () => {
  const [tasks, setTasks] = useState(TaskManager.getTasks());

  const addTask = (title, description) => {
    TaskManager.addTask(title, description);
    setTasks([...TaskManager.getTasks()]);
  };

  const deleteTask = id => {
    TaskManager.deleteTask(id);
    setTasks([...TaskManager.getTasks()]);
  };

  const toggleTaskCompletion = id => {
    TaskManager.toggleTaskCompletion(id);
    setTasks([...TaskManager.getTasks()]);
  };

  return (
    <div className="app">
      <Notification />
      <h1>Collaborative Task Manager</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          const title = e.target.title.value;
          const description = e.target.description.value;
          if (title) {
            addTask(title, description);
            e.target.reset();
          }
        }}
      >
        <input name="title" placeholder="Task Title" />
        <input name="description" placeholder="Task Description" />
        <button type="submit">Add Task</button>
      </form>
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleTaskCompletion}
      />
    </div>
  );
};

export default App;

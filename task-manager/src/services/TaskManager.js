import TaskFactory from "./TaskFactory";
import NotificationSystem from "./NotificationSystem";

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description) {
    const task = TaskFactory.createTask(title, description);
    this.tasks.push(task);
    NotificationSystem.notify(`Task added: "${title}"`);
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    NotificationSystem.notify(`Task deleted.`);
  }

  toggleTaskCompletion(id) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.status = task.status === "pending" ? "completed" : "pending";
      NotificationSystem.notify(`Task status updated: "${task.title}"`);
    }
  }

  getTasks() {
    return this.tasks;
  }
}

export default new TaskManager();

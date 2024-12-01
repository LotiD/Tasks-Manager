class TaskFactory {
    static createTask(title, description, status = "pending") {
      return {
        id: Date.now(),
        title,
        description,
        status, // "pending" or "completed"
      };
    }
  }
  
  export default TaskFactory;
  
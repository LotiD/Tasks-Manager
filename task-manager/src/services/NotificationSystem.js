class NotificationSystem {
    constructor() {
      this.subscribers = [];
    }
  
    subscribe(callback) {
      this.subscribers.push(callback);
    }
  
    unsubscribe(callback) {
      this.subscribers = this.subscribers.filter(sub => sub !== callback);
    }
  
    notify(message) {
      this.subscribers.forEach(callback => callback(message));
    }
  }
  
  export default new NotificationSystem();
  
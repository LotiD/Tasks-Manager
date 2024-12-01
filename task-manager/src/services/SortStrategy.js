class SortStrategy {
    static sortByStatus(tasks) {
      return [...tasks].sort((a, b) => a.status.localeCompare(b.status));
    }
  
    static sortAlphabetically(tasks) {
      return [...tasks].sort((a, b) => a.title.localeCompare(b.title));
    }
  }
  
  export default SortStrategy;
  
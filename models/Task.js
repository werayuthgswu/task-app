class Task {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  getAll() {
    return this.tasks;
  }

  create(title, description) {
    const task = { 
      id: this.nextId++, 
      title, 
      description,
      createdAt: new Date()
    };
    this.tasks.push(task);
    return task;
  }

  delete(id) {
    this.tasks = this.tasks.filter(task => task.id !== parseInt(id));
  }
}

module.exports = new Task();

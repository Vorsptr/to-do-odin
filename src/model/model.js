class Model {
  state = {
    projects: [
      {
        name: "Project 1",
        description: "This is project 1",
        todos: [
          {
            name: "Todo 1",
            description: "This is todo 1",
            done: false,
          },
          {
            name: "Todo 2",
            description: "This is todo 2",
            done: false,
          },
        ],
      },
      {
        name: "Project 2",
        description: "This is project 2",
        todos: [
          {
            name: "Todo 1",
            description: "This is todo 1",
            done: false,
          },
          {
            name: "Todo 2",
            description: "This is todo 2",
            done: false,
          },
        ],
      },
    ],
  };

  loadProjects() {
    return this.state.projects;
  }

  addProject(project) {
    this.state.projects.push(project);
  }
}

const model = new Model();
export default model;

import View from "./View";

class ProjectsView extends View {
  _parentElement = document.querySelector(".menu-content");
  _generateMarkup() {
    return this._data
      .map((projectItem) => {
        return `
        <a class="menu-item"><div>${projectItem.name}</div></a>
        `;
      })
      .join("");
  }
  addHandleCollapseMenu() {
    const collapseButton = document.querySelector(".icon");
    collapseButton.addEventListener("click", () => {
      const menuContent = document.querySelector(".menu-content");
      menuContent.classList.toggle("hidden");
    });
  }
  addHandlerLoadProjects(handler) {
    ["load", "hashchange"].forEach((event) =>
      window.addEventListener(event, handler)
    );
  }
  addHandleAddProject(handler) {
    const project = {
      name: "Project 3",
      description: "This is project 3",
      todos: [
        {
          name: "Todo 1",
          description: "This is todo 1",
          done: false,
        },
      ],
    };
    const addButton = document.querySelector(".add-project");
    addButton.addEventListener("click", () => handler(project));
  }
}

const projectsView = new ProjectsView();
export default projectsView;

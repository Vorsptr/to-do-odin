import View from "./View";

class ProjectsView extends View {
  _parentElement = document.querySelector(".menu-content");
  _generateMarkup() {
    return this._data.map((projectItem) => {
      return `
        <a class="menu-item"><div>${projectItem.name}</div></a>
        `;
    });
  }
  addHandleCollapseMenu() {
    const collapseButton = document.querySelector(".icon");
    collapseButton.addEventListener("click", () => {
      const menuContent = document.querySelector(".menu-content");
      menuContent.classList.toggle("hidden");
    });
  }
}

const projectsView = new ProjectsView();
export default projectsView;

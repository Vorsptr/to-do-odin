import model from "../model/model";
import projectsView from "../view/projects-view";

class Controller {
  async controlLoadProjects() {
    const projects = model.loadProjects();
    projectsView.render(projects);
  }

  async controlAddProject(project) {
    model.addProject(project);
    projectsView.render(model.loadProjects());
  }

  init() {
    projectsView.addHandleCollapseMenu();
    projectsView.addHandlerLoadProjects(this.controlLoadProjects);
    projectsView.addHandleAddProject(this.controlAddProject);
  }
}

export default Controller;

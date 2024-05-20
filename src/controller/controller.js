import model from "../model/model";
import projectsView from "../view/projects-view";

class Controller {
  init() {
    projectsView.addHandleCollapseMenu();
  }
}

export default Controller;

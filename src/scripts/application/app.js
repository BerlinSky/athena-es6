import { NavBar } from '../ui-components/nav-bar.js';

export class App {
  constructor(appTitle) {
    this.navBar = new NavBar(appTitle);
    this.routes = {};
    this.defaultRoute = null;
  }

  configureRoutes() {
    this._createRoute("Home", null, true);
    this._createRoute("Books", null);
    this._createRoute("Authors", null);
    this._createRoute("Clubs", null);
    this._createRoute("Support", null);
  }

  enableRoute(routeId) {
    let component = this.navBar.element.find('.page-content');
    component.empty();
    this.routes[routeId].appendToElement(component);
  }

  render(component) {
    this.navBar.appendToComponent(component);
    if (this.defaultRoute) {
      this.enableRoute(this.defaultRoute);
    }
  }

  _createRoute(routeId, pageComponent, isDefault) {
    this.navBar.addLink(routeId, '');
    this.routes[routeId] = pageComponent;
    this.defaultRoute = isDefault ? routeId : null;
  }
}


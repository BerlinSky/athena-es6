import { UINavBar } from './ui-components/ui-nav-bar.js';

export class Application {
  constructor(appTitle) {
    this.navBar = new UINavBar(appTitle);
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
    this.navBar.appendComponent(component);
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


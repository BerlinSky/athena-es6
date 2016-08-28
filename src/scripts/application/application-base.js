import { NavBar } from '../ui-components/nav-bar.js';

export class ApplicationBase {
    
    // constructor(title) {
    //     this.title = title;
    //     this.titleBar = new TitleBar(this.title);
    //     this.routeMap = {};
    //     this.defaultRoute = null;
    // }
    
    constructor(appTitle) {
      this.appTitle = appTitle;
      this.navBar = new NavBar(this.appTitle);
      this.routes = {};
      this.defaultRoute = null;
    }

    // activateRoute(route) {
    //     let content = this.titleBar.element.find('.page-content');
    //     content.empty();
        
    //     this.routeMap[route].appendToElement(content);
    // }

   enableRoute(routeId) {
    let component = this.navBar.component.find('.page-content');
    component.empty();

    console.log('component in app >', component);
    this.routes[routeId].appendToComponent(component);
  }
    
    // addRoute(id, pageObject, defaultRoute = false) {
    //     this.titleBar.addLink(id, '');

    //     this.routeMap[id] = pageObject;
        
    //     if (defaultRoute) {
    //         this.defaultRoute = id;
    //     }
    // }

  createRoute(routeId, pageComponent, isDefault = false) {
    this.navBar.addLink(routeId, '');
    this.routes[routeId] = pageComponent;

    if (isDefault) {
      this.defaultRoute = routeId ;
    }
  }
    
    // show(element) {
    //     this.titleBar.appendToElement(element);
        
    //     if (this.defaultRoute) {
    //         this.activateRoute(this.defaultRoute);
    //     }
    // }

  render(component) {
    this.navBar.appendToComponent(component);
    if (this.defaultRoute) {
      this.enableRoute(this.defaultRoute);
    }
  }
}
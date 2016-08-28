import $ from 'jquery';

import { NavBar } from '../ui-components/nav-bar.js';

import { HomePage } from '../pages/home-page';

export class App {
  constructor(appTitle) {
    this.navBar = new NavBar(appTitle);
    this.routes = {};
    this.defaultRoute = null;
  }

  configureRoutes() {
    const homePage = new HomePage();
    this._createRoute("Home", homePage, true);

    this._createRoute("Books");
    this._createRoute("Authors");
    this._createRoute("Clubs");
    this._createRoute("Support");
  }

  enableRoute(routeId) {
    let component = this.navBar.component.find('.page-content');
    component.empty();

    console.log('component in app >', component);

    // debugger;

    this.routes[routeId].appendToComponent(component);
  }

  render(component) {
    // show(element) {
    //     this.titleBar.appendToElement(element);
        
    //     this.titleBar.element.find('.mdl-navigation__link').click((event) => {
    //         let route = event.target.innerHTML;
    //         this.activateRoute(route);
    //     });
        
    //     if (this.defaultRoute) {
    //         this.activateRoute(this.defaultRoute);
    //     }
    // }
    this.navBar.appendToComponent(component);

    // this.navBar.component.find('.mdl-navigation__link').click((event) => {
    //     const route = event.target.innerHTML;
    //     this.enableRoute(route);
    // });

    // debugger;


    if (this.defaultRoute) {
      this.enableRoute(this.defaultRoute);
    }
  }

  _createRoute(routeId, pageComponent, isDefault = false) {
    this.navBar.addLink(routeId, '');
    this.routes[routeId] = pageComponent;

    if (isDefault) {
      this.defaultRoute = routeId ;
    }
  }
}

    

   

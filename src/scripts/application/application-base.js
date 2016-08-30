// import { NavBar } from '../ui-components/nav-bar.js';
import { MainLayout } from '../layout/main-layout';
import { Navigation } from '../ui-components/navigation';
import { Footer } from '../ui-components/footer';

import { SearchPanel } from '../ui-components/search-panel';
import { BookSearchResult } from '../pages/book-search-result-partial.js';

export class ApplicationBase {
    constructor(appTitle) {
      this.appTitle = appTitle;
      // this.navBar = new NavBar(this.appTitle);
      this.layout = new MainLayout();
      this.routes = {};
      this.defaultRoute = null;
    }

  //  enableRoute(routeId) {
  //   let component = this.navBar.component.find('.page-content');
  //   component.empty();

  //   console.log('component in app >', component);
  //   this.routes[routeId].appendToComponent(component);
  // }
    
  createRoute(routeId, pageComponent, isDefault = false) {
    // this.navBar.addLink(routeId, '');
    this.routes[routeId] = pageComponent;

    if (isDefault) {
      this.defaultRoute = routeId ;
    }
  }
    
  render(component) {
    // this.navBar.appendToComponent(component);
    this.layout.appendToComponent(component);
    this._appendNavigation();
    this._appendSearchPanel();                                
    this._appendFooter();
    // if (this.defaultRoute) {
    //   this.enableRoute(this.defaultRoute);
    // }
  }

   _appendNavigation() {
    const navigation = new Navigation();
    const navigationContainer = this.layout.component.find('.js-navigationContainer');
    navigation.appendToComponent(navigationContainer);
  }  

  _appendSearchPanel() {
    const searchPanel = new SearchPanel();
    const mainContentContainer = this.layout.component.find('.js-mainContentContainer');
    searchPanel.appendToComponent(mainContentContainer);

    const bookSearchResult = new BookSearchResult();
    console.log('searchResult', bookSearchResult);

    bookSearchResult.appendToComponent(mainContentContainer);
  } 

  _appendFooter() {
    const footer = new Footer();
    const footerContainer = this.layout.component.find('.js-footerContainer');
    footer.appendToComponent(footerContainer);
  }
}
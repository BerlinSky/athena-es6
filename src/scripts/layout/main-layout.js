import { UIBaseComponent } from '../ui-components/base-component.js';

export class MainLayout extends UIBaseComponent {
  constructor() {
    super();
  }

  createComponent() {
    super.createComponent();
  }

  addComponent() {
    return `
			<div class="l-siteContainer l-header-fixed l-footer-fixed siteContainer">

        <section class="searchContainer js-searchContainer">
	        <form class="searchForm">
	          <input class="searchForm__input" type="search" placeholder="Search..."/>
	          <button class="searchForm__submit js-buttonSearchSubmit" type="submit">Search</button>
	        </form>
	        <div class="searchContent">

	        </div>
	        <span class="searchClose js-buttonSearchClose"></span>
	      </section>

	      <section class="js-footerContainer"></section>
	    </div>
    `;
  }
}
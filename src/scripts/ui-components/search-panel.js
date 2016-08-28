import { UIBaseComponent } from './base-component';

export class SearchPanel extends UIBaseComponent {
  
  constructor() {
    super();
    this.styles = '';
  }
  
  addComponent() {
    return `
       
        <div class="formContainer">
        <form class="searchBar">
        <input type="text" class="searchBar__inputText" placeholder="Search ..." name="">
        <input type="submit" class="searchBar__button" value="" name="">
        </form>
        </div>
      
    `;
  }

  setStyles(styles) {
    this.styles = styles;
  }
}


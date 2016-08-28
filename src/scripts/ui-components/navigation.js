import { UIBaseComponent } from './base-component';

export class Navigation extends UIBaseComponent {
  
  constructor() {
    super();
    this.styles = '';
  }
  
  addComponent() {
    return `
      <h1 class="logo"><a href="#">Athena</a></h1>
      <nav class="l-navlinks navlinks">
      <ul>
        <li class="navlinks__item"><a href="#">Books</a></li>
        <li class="navlinks__item"><a href="#">Authors</a></li>
        <li class="navlinks__item"><a href="#">Clubs</a></li>
        <li class="navlinks__item"><a href="#">Login</a></li>
        <li class="navlinks__item"><a href="#">Join</a></li>
      </ul>
      </nav>
      <nav class="navActions">
        <ul>
          <li class="navActions__item menu">
            <a class="js-actionMenu fa-bars">Menu</a>
          </li>
        </ul>
      </nav>
    `;
  }

  setStyles(styles) {
    this.styles = styles;
  }
}


import $ from 'jquery';

import { books } from './data/books-data';
import { BookDataService } from './services/book-data-service';

import { App} from './application/app';

import { Button } from './ui-components/button';
import { Image } from './ui-components/image';
import { Table } from './ui-components/table';

const dataService = new BookDataService();
dataService.populateData(books);

// const bookList = dataService.getBookListSortedByIsbn();
const bookList = dataService.getBookListSortedByTitle();

console.table(bookList);

const book = dataService.getCartByIsbn('1451673310');

console.log(book);

const book2 = dataService.searchBooksByTitle('The');

console.log(book2);

const appTitle = "My Book List";
const app = new App(appTitle);     
app.configureRoutes();
app.render($('body'));

const b = new Button("Click Me");
b.appendToComponent($('body'));

const imgFile = "./images/vanity-fair.jpg";
const img = new Image(imgFile);
img.appendToComponent($('body'));

const tableHeader = "isbn author title publisher pubdate price".split(' ');
const dataTable = new Table(tableHeader, bookList);
dataTable.appendToComponent($('body'));




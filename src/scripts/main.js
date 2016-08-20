import { books } from './data/books-data';
import { BookDataService } from './services/book-data-service';

const dataService = new BookDataService();
dataService.populateData(books);

// const bookList = dataService.getBookListSortedByIsbn();
const bookList = dataService.getBookListSortedByTitle();

console.table(bookList);

const book = dataService.getCartByIsbn('1451673310');

console.log(book);

const book2 = dataService.searchBooksByTitle('The');

console.log(book2);


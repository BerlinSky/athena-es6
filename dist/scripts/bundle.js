(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Book = exports.Book = function Book(isbn, author, title, publisher, pubdate, price) {
	_classCallCheck(this, Book);

	this.isbn = isbn;
	this.author = author;
	this.title = title;
	this.publisher = publisher;
	this.pubdate = pubdate;
	this.price = price;
};

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var books = exports.books = [{
    isbn: '0446310786',
    author: 'Haper Lee',
    title: 'To Kill a Mockingbird',
    publisher: 'Grand Central Publishing',
    pubdate: 'October 11, 1988',
    price: '17.33'
}, {
    isbn: '0141439556',
    author: 'Emily Bronte',
    title: 'Wuthering Heights',
    publisher: 'Penguin Classic',
    pubdate: 'December 31, 2002',
    price: '12.99'
}, {
    isbn: '0684801221',
    author: 'Ernest Hemingway',
    title: 'The Old Man and The Sea',
    publisher: 'Scribner',
    pubdate: 'May 5, 1995',
    price: '15.28'
}, {
    isbn: '0316769487',
    author: 'J.D. Salinger',
    title: 'The Catcher in the Rye',
    publisher: 'Little, Brown and Company',
    pubdate: 'May 1, 1991',
    price: '15.28'
}, {
    isbn: '1451673310',
    author: 'Ray Bradbury',
    title: 'Fahrenheit 451',
    publisher: 'Simon & Schuster',
    pubdate: 'June 1, 2013',
    price: '15.69'
}, {
    isbn: '0451524934',
    author: 'Geroge Orwell',
    title: '1984',
    publisher: 'Signet Classic',
    pubdate: 'January 1, 1961',
    price: '15.75'
}, {
    isbn: '0140177396',
    author: 'John Steinbeck',
    title: 'Of Mice and Men',
    publisher: 'Penguin Books',
    pubdate: 'September 1, 1993',
    price: '18.99'
}];

},{}],3:[function(require,module,exports){
'use strict';

var _booksData = require('./data/books-data');

var _bookDataService = require('./services/book-data-service');

var dataService = new _bookDataService.BookDataService();
dataService.populateData(_booksData.books);

// const bookList = dataService.getBookListSortedByIsbn();
var bookList = dataService.getBookListSortedByTitle();

console.table(bookList);

var book = dataService.getCartByIsbn('1451673310');

console.log(book);

var book2 = dataService.searchBooksByTitle('The');

console.log(book2);

},{"./data/books-data":2,"./services/book-data-service":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BookDataService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _book = require('../components/book');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BookDataService = exports.BookDataService = function () {
	function BookDataService() {
		_classCallCheck(this, BookDataService);

		this.books = [];
	}

	_createClass(BookDataService, [{
		key: 'populateData',
		value: function populateData(books) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = books[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var data = _step.value;

					var book = this._createBook(data);
					this.books.push(book);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}, {
		key: 'getBookListSortedByIsbn',
		value: function getBookListSortedByIsbn() {
			return this.books.sort(function (book1, book2) {
				if (book1.isbn < book2.isbn) {
					return -1;
				}
				if (book1.isbn > book2.isbn) {
					return 1;
				}
				return 0;
			});
		}
	}, {
		key: 'getBookListSortedByTitle',
		value: function getBookListSortedByTitle() {
			return this.books.sort(function (book1, book2) {
				if (book1.title < book2.title) {
					return -1;
				}
				if (book1.title > book2.title) {
					return 1;
				}
				return 0;
			});
		}
	}, {
		key: 'getCartByIsbn',
		value: function getCartByIsbn(isbn) {
			return this.books.find(function (book) {
				if (book.isbn === isbn) {
					return book;
				}
			});
		}
	}, {
		key: 'searchBooksByTitle',
		value: function searchBooksByTitle(title) {
			return this.books.filter(function (book) {
				return book.title.includes(title);
			});
		}
	}, {
		key: '_createBook',
		value: function _createBook(book) {
			return new _book.Book(book.isbn, book.author, book.title, book.publisher, book.pubdate, book.price);
		}
	}]);

	return BookDataService;
}();

},{"../components/book":1}]},{},[3])
//# sourceMappingURL=bundle.js.map

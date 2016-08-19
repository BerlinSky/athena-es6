(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Car = undefined;

var _vehicle = require('./vehicle.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Car = exports.Car = function (_Vehicle) {
	_inherits(Car, _Vehicle);

	function Car(license, model, latLong) {
		_classCallCheck(this, Car);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Car).call(this, license, model, latLong));

		_this.miles = null;
		_this.make = null;
		return _this;
	}

	return Car;
}(_vehicle.Vehicle);

},{"./vehicle.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Drone = undefined;

var _vehicle = require('./vehicle.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drone = exports.Drone = function (_Vehicle) {
	_inherits(Drone, _Vehicle);

	function Drone(license, model, latLong) {
		_classCallCheck(this, Drone);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Drone).call(this, license, model, latLong));

		_this.airTimeHours = null;
		_this.base = null;
		return _this;
	}

	return Drone;
}(_vehicle.Vehicle);

},{"./vehicle.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = exports.Vehicle = function Vehicle(license, model, latLong) {
	_classCallCheck(this, Vehicle);

	this.license = license;
	this.model = model;
	this.latLong = latLong;
};

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var fleet = exports.fleet = [{
    license: 'ABC123',
    type: 'drone',
    model: 'Amazon 1250',
    airTimeHours: '6050',
    base: 'New York',
    latLong: '40.775596 -73.974615'
}, {
    license: 'XYZ456',
    type: 'drone',
    model: 'Amazon 1550',
    airTimeHours: '2100',
    base: 'New York',
    latLong: '40.771956 -73.978531'
}, {
    license: 'QRS678',
    type: 'drone',
    model: 'Google 3800',
    airTimeHours: '300',
    base: 'New York',
    latLong: '40.779423 -73.969411'
}, {
    license: 'AT9900',
    type: 'car',
    make: 'Tesla',
    model: 'Quick Transport',
    miles: '15600',
    latLong: '40.773272 -73.968875'
}, {
    license: 'AT2000',
    type: 'car',
    make: 'Uber',
    model: 'Auto Taxi Plus',
    miles: '400',
    latLong: '40.778878 -73.968435'
}, {
    license: 'AT2020',
    type: 'car',
    make: 'Uber',
    model: 'Zip Trip',
    miles: '12200',
    latLong: '40.778984 -73.962266'
}, {
    license: 'AT4000',
    type: 'car',
    make: 'Lyft',
    model: 'Pick U Up',
    miles: '400',
    latLong: '40.774036 -73.967319'
}];

},{}],6:[function(require,module,exports){
'use strict';

var _car = require('./components/car.js');

var _drone = require('./components/drone.js');

var _fleetData = require('./fleet-data.js');

var _fleetDataService = require('./services/fleet-data-service.js');

var _booksData = require('./data/books-data');

console.table(_booksData.books);

},{"./components/car.js":1,"./components/drone.js":2,"./data/books-data":4,"./fleet-data.js":5,"./services/fleet-data-service.js":8}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataError = exports.DataError = function DataError(message, data) {
	_classCallCheck(this, DataError);

	this.message = message;
	this.data = data;
};

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FleetDataService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _car = require('../components/car.js');

var _drone = require('../components/drone.js');

var _dataError = require('./data-error.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FleetDataService = exports.FleetDataService = function () {
  function FleetDataService() {
    _classCallCheck(this, FleetDataService);

    this.cars = [];
    this.drones = [];
    this.errors = [];
  }

  _createClass(FleetDataService, [{
    key: 'getCarByLicense',
    value: function getCarByLicense(license) {
      return this.cars.find(function (car) {
        return car.license === license;
      });
    }
  }, {
    key: 'getCarsSortedByLicense',
    value: function getCarsSortedByLicense() {
      return this.cars.sort(function (car1, car2) {
        if (car1.license < car2.license) return -1;
        if (car1.license > car2.license) return 1;
        return 0;
      });
    }
  }, {
    key: 'filterCarsByMake',
    value: function filterCarsByMake(filter) {
      return this.cars.filter(function (car) {
        return car.make.indexOf(filter) >= 0;
      });
    }
  }, {
    key: 'loadData',
    value: function loadData(fleet) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = fleet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var data = _step.value;

          switch (data.type) {
            case 'car':
              if (this.validateCarData(data)) {
                var car = this.loadCar(data);
                if (car) this.cars.push(car);
              } else {
                var _e = new _dataError.DataError('invalid car data', data);
                this.errors.push(_e);
              }
              break;
            case 'drone':
              this.drones.push(data);
              break;
            default:
              var e = new _dataError.DataError('Invalid vehicle type', data);
              this.errors.push(e);
              break;
          }
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
    key: 'loadCar',
    value: function loadCar(car) {
      try {
        var c = new _car.Car(car.license, car.model, car.latLong);
        c.miles = car.miles;
        c.make = car.make;
        return c;
      } catch (e) {
        this.errors.push(new _dataError.DataError('error loading car', car));
      }
      return null;
    }
  }, {
    key: 'validateCarData',
    value: function validateCarData(car) {
      var requiredProps = 'license model latLong miles make'.split(' ');
      var hasErrors = false;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = requiredProps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var field = _step2.value;

          if (!car[field]) {
            this.errors.push(new _dataError.DataError('invalid field ' + field, car));
            hasErrors = true;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (Number.isNaN(Number.parseFloat(car.miles))) {
        this.errors.push(new _dataError.DataError('invalid milage', car));
        hasErrors = true;
      }
      return !hasErrors;
    }
  }]);

  return FleetDataService;
}();

},{"../components/car.js":1,"../components/drone.js":2,"./data-error.js":7}]},{},[6])
//# sourceMappingURL=bundle.js.map

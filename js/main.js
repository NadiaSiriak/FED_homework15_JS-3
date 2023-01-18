var counter = (function () {
var count = 0;
return function (n) {
  count = n === undefined ? count : n;

  return count++;
}
}());

console.log(counter());
console.log(counter(5));
console.log(counter());
console.log(counter());
console.log(counter(44));
console.log(counter());
console.log(counter(111));
console.log(counter());

var counting = (function () {
  var count = 0;

  return {
    value(n) {
      if (n !== undefined) count = n;
      return count;
    },
    increment() {
      count++;
    },
    decrement() {
      count--;
    }
  };
}());

console.log(counting.value(6));
counting.increment();
counting.increment();
console.log(counting.value());
counting.decrement();
console.log(counting.value());
console.log(counting.value(28));
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value());
console.log(counting.value(333));
counting.decrement();
console.log(counting.value());

var myPrint = (a, b, result) => `${a}^${b}=${result}`
var myPow = (a, b, callback) => {
  var pow = (c, d) => {
    if (d !== 1) return c *= pow(c, d - 1);

  return c;
  }
  return callback(a, b, pow(a, b));
};

console.log(myPow(2, 4, myPrint));
console.log(myPow(5, 3, myPrint));

function fullInfo() {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}

var yearCurrent = new Date().getFullYear();
var car = {
  engine: 1600,
  model: 'Fiesta',
  name: 'Ford',
  year: 2019,
  info: fullInfo,
  get used() {
    return this.year !== yearCurrent ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearCurrent) this.year = yearCurrent;
    }
};

var car2 = {
  engine: 2000,
  model: 'CH-R',
  name: 'Toyota',
  year: 2023,
  info: fullInfo,
  get used() {
    return yearCurrent - this.year ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearCurrent) this.year = yearCurrent;
    }
};

console.log(car.info());
car.used = 'new';
console.log(car.info());
car.used = 'used';
console.log(car.info());
console.log(car2.info());
car.used = 'used';
console.log(car2.info());

var array = [44, 88, 26, 57, 31, 9,];
var myMax = (arg) => Math.max.apply(Math, arg);

console.log(myMax(array));

var myMul = (a, b) => a * b;

var myDouble = myMul.bind(null, 2);

console.log(myDouble(5));
console.log(myDouble(9));
console.log(myDouble(16));

var myTriple = myMul.bind(null, 3);

console.log(myTriple(4));
console.log(myTriple(7));
console.log(myTriple(11));

var notUniqNums = [5, 10, 13, 8, 14, 10, 17, 41, 13, 32];
var notUniqStrings = ['Toni', 'Joan', 'Montse', 'Marta', 'Manel', 'Marta', 'Joan'];

var myUniq = (arr) => {
  var set = new Set(arr);

  return set;
};

console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));






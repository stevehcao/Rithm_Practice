// are procedures
// arbitary collection of instructions
function foo(x, y, z, w) {
  console.log(x, y, z, w);
}

function bar(x = 2, ...args) {
  return foo(x, 42, ...args);
}

bar();
bar(3, 8, 11);
bar(...[6, 5]);

// functions
function foo2(x, y) {
  return [x + 1, y - 1];
}

var [a, b] = foo(...[5, 10]);

a; // 6
b; // 9

// composition
// imperative version
// let str = upperCase(trim(removeInvalidChars(str)));

// compose
// var formatStr = compose([upperCase, trim, removeInvalidChars]);

// str = formatStr(str);

// currying
// var ajax = curry(function ajax(url, data, cb) {
//   // something
// })

// // v is interchangable
// function fee(function(v) {
//   return bar(v);
// });
// // can write this instead?
// fee(bar);

function isOdd(v) {
  return v % 2 === 1;
}
// communicate there is a relationship to is odd
function isEven(v) {
  return !isOdd(v); // is the negation of isOdd
}

// not! is a function that negates
function not(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

var pointfreeIsEven = not(isOdd);

isEven(4);

// currying + compose
// function isOdd(v) {
//   return eq(1, mod(2,v));
// }

// would need a functional library for the compose, eq, and mod utility
// var isOdd = compose([eq(1), mod(2)]);

"use strict";

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

var soma1 = function soma1() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return a + b;
};

console.log(soma(1));
console.log(soma());
console.log(soma1(11));
console.log(soma1());

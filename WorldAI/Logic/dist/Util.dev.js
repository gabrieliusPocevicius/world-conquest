"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.avg = avg;
exports.add = add;
exports.getRandom = getRandom;
exports.distanceBetween = distanceBetween;
exports.midpoint = midpoint;
exports.probability = probability;

/*distance between points(6, 6) and(2, 3)

d = √(6– 2)² + (6– 3)²
d = √(4)² + (3)²
d = √16 + 3
d = √25
d = 5
*/
function avg() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  // returns the average of all the parameters
  if (values.length === 0) {
    return 0;
  }

  var sum = 0;

  for (var i in values) {
    if (values.hasOwnProperty(i)) {
      sum += values[i];
    }
  }

  return sum / values.length;
}

function distanceBetween(x1, y1, x2, y2) {
  var x = x1 - x2;
  var y = y1 - y2;
  var d = Math.pow(x, 2) + Math.pow(y, 2);
  var result = Math.sqrt(d); //console.log('distance: ' + result + 'm');

  return result;
}

distanceBetween(6, 2, 6, 3);
/*midpoint between(-1, 2) and(3, -6)
(-1 + 3) / 2, (2 + -6) / 2
2 / 2, -4 / 2
Midpoint(1, -2)
*/

function midpoint(x1, y1, x2, y2) {
  var x = (x1 + x2) / 2;
  var y = (y1 + y2) / 2;
  var midPoint = [];
  midPoint.push(x);
  midPoint.push(y);
  console.log("mid point " + midPoint + "m");
  return midPoint;
}

function add() {
  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  if (values.length === 0) {
    return 0;
  }

  var sum = 0;

  for (var i in values) {
    sum += values[i];
  }

  return sum;
}

function probability() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  // @param {x} x outof that many items
  var totalItems = x;
  var itemSelected = item;
  var probability = itemSelected / totalItems;
  return probability * 100 + "%";
}

function getRandom(min, max) {
  var value = Math.floor(Math.random() * (max - min)) + min;
  return value;
}
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var worldWealth = 1000;
console.log('wealth', worldWealth);
var person = {
  name: 'John Doe',
  wealth: 0
};
var person1 = {
  name: 'James Johnson',
  wealth: 0
};

var Economics =
/*#__PURE__*/
function () {
  function Economics() {
    _classCallCheck(this, Economics);
  }

  _createClass(Economics, [{
    key: "createJob",
    value: function createJob() {}
  }, {
    key: "addWealth",
    value: function addWealth(takenWealth, person) {
      worldWealth -= takenWealth;
      person.wealth = takenWealth;
      worldWealth >= takenWealth ? console.log(takenWealth, 'wealth to', person.name, 'Global Wealth left:', worldWealth) : console.log('No more wealth left for ', person);
    }
  }, {
    key: "transfer",
    value: function transfer(wealth, from, to) {
      wealth <= from.wealth ? console.log(from, ' payed ', to) : console.log(from, 'cant afford to pay to ', to);
    }
  }]);

  return Economics;
}();

;
person.wealth = new Economics().addWealth(10, person);
person.wealth = new Economics().transfer(5, person, person1);
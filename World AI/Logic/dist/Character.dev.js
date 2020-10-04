"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Character = void 0;

var _DataBase = require("./DataBase.js");

var _Util = require("./Util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*import {alive, lifeStage, time} from './Time.js';
 */
//Util func
function randomN(x) {
  return Math.floor(Math.random() * x);
}

var nationality = [];
var surnames = [];

for (var _i = 1; _i < _DataBase.rawSurnames.length; _i += 2) {
  nationality.push(_DataBase.rawSurnames[_i]);
}

for (var j = 0; j < _DataBase.rawSurnames.length; j += 2) {
  surnames.push(_DataBase.rawSurnames[j]);
} // separate iterator for NAMES


var it = 0; // same iterator for SURNAMES and NATIONALITY

var snit = 0; //nationality and Surnames joined

var ns = [];

for (var i = 0; i < 18; i++) {
  ns = nationality[i] + "," + surnames[i];
  var str = ns.split(",");
  var n = str[str.length - 1];
} // making random people attributes
//Makes the attack strength more dynamic by age affecting your attk 


function simulateAttack(age, atk, risk) {
  console.log("initial atk: " + atk);

  if (Number(age) > 39) {
    atk = atk / 2; //console.log(age);

    console.log("Lost " + atk + " strength");
    console.log("'Old Man In Affect:' total " + atk + " Strength");

    if (atk < 0) {
      risk = Math.abs(atk);
      return atk = 0;
    }

    return atk;
  } else if (Number(age) > 12 && Number(age) < 39) {
    // maturing to adulthood. Developing muscules.
    var stronger = age * 2;
    console.log(age);
    console.log(atk);
    var strength = atk + stronger;
    console.log(strength);
    console.log("'Young Man In Affect:'" + stronger + " Strength");

    if (atk < 0) {
      risk = Math.abs(atk);
      return strength, atk = 0;
    }

    return strength;
  } else {
    var a = atk - 10;
    atk = a;
    console.log("'Is only a Child In Affect:' " + atk);
  }

  console.log("Final atk:" + atk);
  return atk;
}

function simulateHp(age, hp, risk) {
  //Calculates Risk of catching diseases based on age and life chosen path
  risk = 0;

  if (Number(age) > 39) {
    risk += 5;
  }

  if (age > 50 || age > 40 && "Alcoholic") {
    return risk += 15;
  }

  for (var _i2 in _DataBase.sickness) {
    if (_DataBase.sickness.hasOwnProperty(_i2)) {
      var element = _DataBase.sickness[_i2];
      console.log(element);
    }
  }

  var keyNames = Object.keys(_DataBase.sickness);
  console.log(keyNames);
}

var id = 0;

var Character =
/*#__PURE__*/
function () {
  function Character() {
    _classCallCheck(this, Character);

    var snit = (0, _Util.getRandom)(0, 18);
    this.name = _DataBase.names[(0, _Util.getRandom)(0, 15)] + surnames[snit];
    this.nationality = nationality[snit] + " descendant";
    this.hp = 100;
    this.atk = (0, _Util.getRandom)(0, 100);
    this.age = (0, _Util.getRandom)(0, 100);
    this.atk = simulateAttack(this.age, this.atk);
    this.armour = 0;
    this.risk = 0;

    this.id = function () {
      return id++;
    };
  }

  _createClass(Character, [{
    key: "info",
    value: function info() {
      console.log("Name: " + this.name + "\n" + "Nationality: " + this.nationality + "\n" + "Health: " + this.hp + "\n" + "Strength: " + this.atk + "\n" + "Age: " + this.age + "\n");
    }
  }]);

  return Character;
}(); // class Enemy extends Character {
//     constructor(name, hp, atk, age, honor, relations) {
//             super(name, hp, atk, age, honor)
//             this.name = name;
//             this.hp = hp;
//             this.atk = atk;
//             this.age = age;
//             this.honor = honor;
//             this.relations = relations;
//         }
//         // class functions here
// }
// Would update the first dataset's value of 'March' to be 50


exports.Character = Character;
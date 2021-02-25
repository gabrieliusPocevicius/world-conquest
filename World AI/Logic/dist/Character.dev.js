"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayPerson = displayPerson;
exports.maker = maker;
exports.food = exports.Character = exports.deaths = exports.people = void 0;

var _DataBase = require("./DataBase.js");

var _Util = require("./Util.js");

var _Time = require("./Time.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var id = 0; // the id of each object of the Character class

var nationality = [];
var surnames = [];
var it = 0; // separate iterator for NAMES

var gen = ["Male", "Female"];
var percent = Math.round(Math.random() * 99 + 1);
var people = {
  // contains all the people of the world
  //compare(p1, p2);
  count: 0,
  person: []
};
/*

    We need Four kingdoms and therefore four kings.
    North, East, West, and South.


*/

exports.people = people;
var deaths = 0;
exports.deaths = deaths;
var male = 0;
var female = 0;
var displayUserInfo = document.getElementById('information-display');
displayUserInfo.style.opacity = '0';
var getAttributes = {};

var Character = function Character() {
  var _this = this;

  _classCallCheck(this, Character);

  var percent = Math.floor(Math.random() * 99 + 1); //50% change of it being a boy for a girl.

  this.id = id += 1;
  this.title = "".concat(_DataBase.job[0].name);
  this.alive = true;

  if (percent <= 50) {
    var maleTemplate = function maleTemplate() {
      _this.name = _DataBase.names[(0, _Util.getRandom)(0, 400)];
      _this.gender = "male";
      _this.age = 0;
      _this.hp = 100;
      _this.atk = (0, _Util.getRandom)(0, 100);
      _this.armour = 0;
      _this.risk = 0;
      ++male;
      var birthday = Date.now();
      $('#male-count').text(male);
      var info = {
        name: _this.name,
        gender: _this.gender,
        age: _this.age,
        hp: _this.hp,
        atk: _this.atk,
        armour: _this.armour,
        id: _this.id
      };
      displayPerson(info.gender, info.id);
      var person = document.getElementById("person_".concat(info.id));
      person.addEventListener("click", function (e) {
        e.preventDefault();
        console.log('hello', info.name);
      });
      var displayInfoIds = {
        "info-name": info.name,
        "info-gender": info.gender,
        "info-age": info.age,
        "info-health": info.hp,
        "info-attack": info.atk,
        "info-armour": info.armour,
        "info-id": info.id
      };
      getAttributes = displayInfoIds;
      person.addEventListener('mouseout', function (e) {
        e.preventDefault();
        displayUserInfo.style.opacity = '0';
      });
      person.addEventListener('mouseover', function (e) {
        e.preventDefault();
        displayUserInfo.style.opacity = '1';
        info.age = Math.floor((Date.now() - birthday) / (_Time.speed * 360));
        displayInfoIds["info-age"] = info.age;
        var keys = Object.keys(displayInfoIds);
        var props = Object.values(displayInfoIds);

        for (var i = 0; i < keys.length; i++) {
          document.getElementById(keys[i]).innerHTML = props[i];
        }

        ;
      });
    };

    maleTemplate();
  } else {
    var femaleTemplate = function femaleTemplate() {
      _this.name = _DataBase.fnames[(0, _Util.getRandom)(0, 400)];
      _this.gender = "female";
      _this.hp = 100;
      _this.age = 0;
      _this.atk = (0, _Util.getRandom)(0, 60);
      _this.armour = 0;
      _this.risk = 0;
      ++female;
      $('#female-count').text(female);
      var info = {
        name: _this.name,
        gender: _this.gender,
        age: _this.age,
        hp: _this.hp,
        atk: _this.atk,
        armour: _this.armour,
        id: _this.id
      };
      displayPerson(info.gender, info.id);
      var person = document.getElementById("person_".concat(info.id));
      person.addEventListener("click", function (e) {
        e.preventDefault();
        console.log('hello', info.name);
      });
      var displayInfoIds = {
        "info-name": info.name,
        "info-gender": info.gender,
        "info-age": info.age,
        "info-health": info.hp,
        "info-attack": info.atk,
        "info-armour": info.armour,
        "info-id": info.id
      };
      person.addEventListener('mouseout', function (e) {
        e.preventDefault();
        displayUserInfo.style.opacity = '0';
      });
      person.addEventListener('mouseover', function (e) {
        e.preventDefault();
        displayUserInfo.style.opacity = '1';
        var keys = Object.keys(displayInfoIds);
        var props = Object.values(displayInfoIds);

        for (var i = 0; i < keys.length; i++) {
          document.getElementById("".concat(keys[i])).innerHTML = props[i];
        }

        ;
      });
    };

    femaleTemplate();
  }

  ; //let live = console.log(Math.floor(Math.random() * 5000) + 1000);

  /* console.log('people', people.count); */

  /*  setTimeout(()=>{deathFunction(person)},5000);  */
};

exports.Character = Character;
var ages = 0;

function deathFunction(id) {
  if (people.count > 0) {
    id.classList[id.classList.length - 1] === 'male' ? $('#male-count').text(--male) : $('#female-count').text(--female);
    id.remove();
    people.count--;
    (0, _DataBase.displayHTML)(people.count, "#population", "h5");
    (0, _DataBase.displayHTML)(exports.deaths = deaths = +deaths + 1, "#deaths", "h5");
  }
}

;

function deathClick(e) {
  e = e || window.event;
  e.currentTarget.classList[0] === 'male' ? $('#male-count').text(--male) : $('#female-count').text(--female);
  e.currentTarget.remove();
  people.count--;
  (0, _DataBase.displayHTML)(people.count, "#population", "h5");
  (0, _DataBase.displayHTML)(exports.deaths = deaths = +deaths + 1, "#deaths", "h5");
}

;

function showbio(e) {
  e = e || window.event;
  e.currentTarget.classList[0] === 'male' ? console.log(e.currentTarget) : console.log(e.currentTarget);
  /*     people.count--;
      displayHTML(people.count, "#population", "h5");
      displayHTML(++deaths, "#deaths", "h5"); */
}

;

var sum = function sum(a, b) {
  return a + b;
};

var arrayAdd = function arrayAdd(data) {
  return [].push(data);
};

function displayPerson(gender, id) {
  //age = setInterval(() => $(`#male-age${id}`).text(console.log(++age)) , 1000);
  var color = [52, 58, 64, 1];
  var person_icon = "\n    <div id=\"person_".concat(id, "\" class='d-block ").concat(gender, "'>\n       <div class=\"rounded p-1 m-1\" style='background-color:rgba(").concat(color[0], ",").concat(color[1], ",").concat(color[2], ",").concat(color[3], ");'>\n            <svg  width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\">\n                <path  d=\"M9.53524 21V14.5H9.02349C8.46057 14.5 8 14.05 8 13.5V9C8 7.9 8.92114 7 10.047 7H13.1175C14.2433 7 15.1644 7.9 15.1644 9V13.5C15.1644 14.05 14.7039 14.5 14.1409 14.5H13.6292V21C13.6292 21.55 13.1686 22 12.6057 22H10.5587C9.99581 22 9.53524 21.55 9.53524 21ZM11.5822 6C12.7183 6 13.6292 5.11 13.6292 4C13.6292 2.89 12.7183 2 11.5822 2C10.4461 2 9.53524 2.89 9.53524 4C9.53524 5.11 10.4461 6 11.5822 6Z\" fill=\"#007bff\"/>\n            </svg>\n        <div>\n    </div>\n    "); //var person_ID = document.getElementById(`person_${id}`);
  //console.log((person_ID.innerText = ""));

  var f_person_icon = "\n    <div id=\"person_".concat(id, "\" class='d-block female'>\n        <div class=\"rounded p-1 m-1\" style='background-color:rgba(").concat(color[0], ",").concat(color[1], ",").concat(color[2], ",").concat(color[3], ");'>\n            <svg  width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\">\n            <path  d=\"M13.7458 21V16H15.3936C16.0896 16 16.5809 15.33 16.3659 14.68L14.2166 8.37C13.93 7.55 13.1522 7 12.272 7H12.1492C11.269 7 10.4809 7.55 10.2045 8.37L8.0552 14.68C7.83003 15.33 8.32131 16 9.02752 16H10.6753V21C10.6753 21.55 11.1359 22 11.6988 22H12.7223C13.2852 22 13.7458 21.55 13.7458 21ZM12.2106 6C13.3467 6 14.2576 5.11 14.2576 4C14.2576 2.89 13.3467 2 12.2106 2C11.0745 2 10.1636 2.89 10.1636 4C10.1636 5.11 11.0745 6 12.2106 6Z\" fill=\"rgb(255, 99, 132)\"/>\n            </svg>\n        </div>       \n    </div>\n    ");

  if (gender == "female") {
    person_icon = f_person_icon;
  }

  $("people").append("".concat(person_icon)); //Creates the icon figure of a person to the screen
}

var onePersonAge = document.querySelector('#person_1');

if (onePersonAge !== null) {
  (0, _DataBase.log)(onePersonAge);
}

var nobles = []; //Lists all the nobles and their props

var peasantsUnderNoble = []; //Lists all the peasants under the noble.
///////////////////////////////////////////////////////////////////////////////////

function befriend(person, person1) {
  person.friend = person1;
  person1.friend = person;

  if (person.friend.gender == "female") {
    person.friend.gender = "Female";
  }

  if (person1.friend.gender == "female") {
    person1.friend.gender = "Female";
  }

  if (person.friend.gender == "male") {
    person.friend.gender = "Male";
  }

  if (person1.friend.gender == "male") {
    person1.friend.gender = "Male";
  }

  console.log(person.name + ", friends with " + person.friend.name + " is " + person.friend.gender);
  console.log(person1.name + ", friends with " + person1.friend.name + " is " + person1.friend.gender);

  if (person.friend.gender != person1.friend.gender) {
    console.log("Married");
  }
} //var c = new Character();
//var c2 = new Character();
//befriend(c, c2);


var members = 0; //peasants the noble is assigned as levies and farmers.
//becomeNoble();

function becomeNoble() {
  var theNoble = {};

  for (var i = 0; i < 100; i++) {
    var percent = Math.round(Math.random() * 99 + 1); // percent of becoming noble

    if (percent === 100) {
      theNoble = new Character();
      people.person.push(theNoble);
      console.log("Peasants under the noble " + theNoble.name + " " + members + " Levies");
      break;
    } else {
      //var peasants = people.person.push(new Character());
      ++members;
    }
  }

  nobles.push(theNoble); //console.log(theNoble);

  nobles.forEach(function (_element, i) {
    nobles[i].title = "Noble";
  }); //console.log(people);
} //console.log(p.armour);
//console.log((militaryRanks.rank[3].armor += p.armour));


function randomN(x) {
  return Math.floor(Math.random() * x);
}

function compare(obj, obj2) {
  for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    console.log("1- ".concat(key, " ").concat(value));
  }

  for (var _i2 = 0, _Object$entries2 = Object.entries(obj2); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        _key = _Object$entries2$_i[0],
        _value = _Object$entries2$_i[1];

    console.log("2- ".concat(_key, ": ").concat(_value));
  }
}

function simulateAttack(age, atk, risk) {
  //Makes the attack strength more dynamic by age affecting your attk
  //console.log("initial atk: " + atk);
  if (Number(age) > 39) {
    atk = atk / 2; //console.log(age);
    //console.log("Lost " + atk + " strength");
    //console.log("'Old Man In Affect:' total " + atk + " Strength");

    if (atk < 0) {
      risk = Math.abs(atk);
      atk = 0;
    }

    return atk;
  } else if (Number(age) > 12 && Number(age) < 39) {
    // maturing to adulthood. Developing muscules.
    var stronger = age * 2; //console.log(age);
    //console.log(atk);

    var strength = atk + stronger; //console.log(strength);
    //console.log("'Young Man In Affect:'" + stronger + " Strength");

    if (atk < 0) {
      risk = Math.abs(atk);
      return strength, atk = 0;
    }

    return strength;
  } else {
    var a = atk - 10;
    atk = a; //console.log("'Is only a Child In Affect:' " + atk);
  } //console.log("Final atk:" + atk);


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

  for (var i in _DataBase.sickness) {
    if (_DataBase.sickness.hasOwnProperty(i)) {
      var element = _DataBase.sickness[i]; //console.log(element);
    }
  }

  var keyNames = Object.keys(_DataBase.sickness); //console.log(keyNames);
} // making random people attributes


var food = {
  count: 0,
  food: []
}; //makes people appear

exports.food = food;

function displayPopulationCount() {
  var displayElement = $("#population");
  displayElement.html("<h5>" + people.count + "</h5>");
}

function maker(n) {
  while (n > 0) {
    ++people.count;
    people.person.push(new Character(n)); //console.log(people.person);

    n--;
  }

  displayPopulationCount();
  return people.count;
} //console.log(maker(10));
//army viewer

/* (function() {
  
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
})(); */
// class Enemy extends Character {
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
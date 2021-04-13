"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayPerson = displayPerson;
exports.maker = maker;
exports.Character = exports.people = void 0;

var _DataBase = require("./DataBase.js");

var _Time = require("./Time.js");

var _Util = require("./Util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var id = 0; // the id of each object of the Character class

var nationality = [];
var surnames = [];
var percent = Math.round(Math.random() * 99 + 1);
var people = {
  // contains all the people of the world
  //compare(p1, p2);
  count: 0,
  children: 0,
  person: []
};
/*

    We need Four kingdoms and therefore four kings.
    North, East, West, and South.


*/

exports.people = people;
var deaths = 0;
var male = 0;
var female = 0;
var getAttributes = {};
var timeGoes = false;
var displayUserInfo = document.getElementById("information-display");
displayUserInfo.style.opacity = "0"; // removes the time from the people's age

/*  let timePaused = 0;

        const start = Date.now();
        setInterval(() => {

            const millis = Date.now() - start;
            timePaused =  Math.floor(millis / 1000);

 }, 1000);  */
// expected output: seconds elapsed = 2

var Character = function Character(agePassed, gender) {
  _classCallCheck(this, Character);

  var birthYear = _Time.calender.yearC - _Time.calender.years;
  var age = 0 + agePassed;
  var adult = false;
  var life = setInterval(function () {
    if (_Time.play) {
      /* console.log('birth Year: ', birthYear); */
      var time = _Time.calender.yearC - _Time.calender.years - birthYear;
      var storeTime = 0;
      /* console.log('Time ',time); */

      storeTime = time + agePassed;
      age = storeTime; //remove from child catagory

      return age;
    }
  }, 2000);

  if (age == null) {
    console.log("stopped process");
    clearInterval(life);
  }

  var aging = setInterval(function () {
    /* console.log('ages  now : ',age); */
    if (age === 18) {
      adult = true;
      displayNoLongerChild();
      clearInterval(aging);
    }
  }, 3000);
  var skill = 0;

  function qaulities() {
    var work = (0, _Util.getRandom)(0, 100);

    if (work > 1) {
      skill++;
      qaulities();
    }
    /* console.log('skills ', skill); */

  }

  var percent = 0;

  if (!gender) {
    percent = Math.floor(Math.random() * 99 + 1);
  } else {
    percent = gender;
  } //50% change of it being a boy for a girl.

  /* let dna = getRandom(0,1000);*/


  this.id = id += 1;
  /* let random = getRandom(0,6); */

  /* this.title = `${job[random].name}`; */

  /* console.log(this.title); */

  if (percent <= 50) {
    var wallet = function wallet() {
      console.log(man.name, "has", man.wealth);
    };

    ++male;
    $("#male-count").text(male);
    var man = {
      id: this.id,
      name: _DataBase.names[(0, _Util.getRandom)(0, 400)],
      gender: "male",
      age: age,
      hp: 100,
      atk: (0, _Util.getRandom)(50, 100),
      //TODO not limit to a 100
      children: 0,
      wealth: 0
    };
    displayPerson(man.gender, man.id);
    getAttributes = man;
    var person = document.getElementById("person_".concat(man.id));
    var lifeInterval = setInterval(function () {
      if (_Time.play) {
        var dead = new Promise(function (resolve, reject) {
          if (man.age >= Math.floor(Math.random() * 5 + 1) + 72) {
            resolve("died");
          }
        });
        dead.then(function () {
          deathFunction("male");
          person.remove();
          console.log("person Dead ", man.name, "at the age of ", man.age);
          delete man.id;
          delete man.name;
          delete man.gender;
          delete man.age;
          delete man.hp;
          delete man.atk;
          delete man.children;
          console.log("wealth left behind:", man.wealth);
          clearInterval(lifeInterval);
        });
      }
    }, 5000);
    person.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Name:", man.name);
      console.log("gender:", man.gender);
      console.log("age:", man.age);
      console.log("hp:", man.hp);
      console.log("Strength:", man.atk);
    });
    person.addEventListener("mouseover", function (e) {
      /* e.stopPropagation(); */
      e.preventDefault();
      man.age = age;
      displayUserInfo.style.opacity = "1";
      var keys = Object.keys(man);
      var props = Object.values(man);

      for (var i = 0; i < keys.length; i++) {
        document.getElementById(keys[i]).innerHTML = props[i];
      }
    });
    qaulities();
  } else {
    var _wallet = function _wallet() {
      console.log(woman.name, "has", woman.wealth);
    };

    ++female;
    $("#female-count").text(female);
    var woman = {
      id: this.id,
      name: _DataBase.fnames[(0, _Util.getRandom)(0, 400)],
      gender: "female",
      hp: 100,
      age: age,
      atk: (0, _Util.getRandom)(25, 60),
      children: 0,
      wealth: 0
    };
    displayPerson(woman.gender, woman.id);
    getAttributes = woman;
    var fertile = setInterval(function () {
      woman.children = reproduction(age, woman.children);
      /*   console.log(woman.children);  */

      if (age > 37) {
        clearInterval(fertile); //sterile
      }
    }, 3000);

    var _person = document.getElementById("person_".concat(woman.id));

    var _lifeInterval = setInterval(function () {
      var dead = new Promise(function (resolve, reject) {
        if (woman.age >= Math.floor(Math.random() * 5 + 1) + 72) {
          resolve("died");
        }
      });
      dead.then(function () {
        deathFunction("female");

        _person.remove();

        console.log("person Dead ", woman.name, "at the age of ", woman.age);
        delete woman.id;
        delete woman.name;
        delete woman.gender;
        delete woman.age;
        delete woman.hp;
        delete woman.atk;
        delete woman.children;
        console.log("wealth left behind:", woman.wealth, "children:", woman.children);
        clearInterval(_lifeInterval);
      });
    }, 5000);

    _person.addEventListener("click", function (e) {
      /*  e.stopPropagation(); */
      e.preventDefault();
      console.log("hello", woman.name);
    });

    _person.addEventListener("mouseover", function (e) {
      /* e.stopPropagation(); */
      e.preventDefault();
      woman.age = age;
      displayUserInfo.style.opacity = "1";
      var keys = Object.keys(woman);
      var props = Object.values(woman);

      for (var i = 0; i < keys.length; i++) {
        document.getElementById("".concat(keys[i])).innerHTML = props[i];
      }
    });

    qaulities();
  }
};

exports.Character = Character;

function deathFunction(gender) {
  if (people.count > 0) {
    gender === "male" ? $("#male-count").text(--male) : $("#female-count").text(--female);
    people.count--;
    (0, _DataBase.displayHTML)(people.count, "#population", "h5");
    (0, _DataBase.displayHTML)(++deaths, "#deaths", "h5");
  }
}

function deathClick(e) {
  e = e || window.event;
  e.currentTarget.classList[0] === "male" ? $("#male-count").text(--male) : $("#female-count").text(--female);
  e.currentTarget.remove();
  people.count--;
  (0, _DataBase.displayHTML)(people.count, "#population", "h5");
  (0, _DataBase.displayHTML)(++deaths, "#deaths", "h5");
}

function displayPerson(gender, id) {
  var color = [52, 58, 64, 1];
  var person_icon = "\n    <div id=\"person_".concat(id, "\" class='d-block ").concat(gender, "'>\n      \n       <div class=\"rounded p-1 m-1\" style='background-color:rgba(").concat(color[0], ",").concat(color[1], ",").concat(color[2], ",").concat(color[3], ");'>\n            <svg  width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\">\n                <path  d=\"M9.53524 21V14.5H9.02349C8.46057 14.5 8 14.05 8 13.5V9C8 7.9 8.92114 7 10.047 7H13.1175C14.2433 7 15.1644 7.9 15.1644 9V13.5C15.1644 14.05 14.7039 14.5 14.1409 14.5H13.6292V21C13.6292 21.55 13.1686 22 12.6057 22H10.5587C9.99581 22 9.53524 21.55 9.53524 21ZM11.5822 6C12.7183 6 13.6292 5.11 13.6292 4C13.6292 2.89 12.7183 2 11.5822 2C10.4461 2 9.53524 2.89 9.53524 4C9.53524 5.11 10.4461 6 11.5822 6Z\" fill=\"#007bff\"/>\n            </svg>\n        <div>\n    </div>\n    ");
  var f_person_icon = "\n    <div id=\"person_".concat(id, "\" class='d-block female'>\n        <div class=\"rounded p-1 m-1\" style='background-color:rgba(").concat(color[0], ",").concat(color[1], ",").concat(color[2], ",").concat(color[3], ");'>\n            <svg  width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\">\n            <path  d=\"M13.7458 21V16H15.3936C16.0896 16 16.5809 15.33 16.3659 14.68L14.2166 8.37C13.93 7.55 13.1522 7 12.272 7H12.1492C11.269 7 10.4809 7.55 10.2045 8.37L8.0552 14.68C7.83003 15.33 8.32131 16 9.02752 16H10.6753V21C10.6753 21.55 11.1359 22 11.6988 22H12.7223C13.2852 22 13.7458 21.55 13.7458 21ZM12.2106 6C13.3467 6 14.2576 5.11 14.2576 4C14.2576 2.89 13.3467 2 12.2106 2C11.0745 2 10.1636 2.89 10.1636 4C10.1636 5.11 11.0745 6 12.2106 6Z\" fill=\"rgb(255, 99, 132)\"/>\n            </svg>\n        </div>\n    </div>\n    ");

  if (gender == "female") {
    person_icon = f_person_icon;
  }

  $("people").append("".concat(person_icon)); //Creates the icon figure of a person to the screen
}

function marriage() {
  var color = [52, 58, 64, 1];
  var family_icon = "\n    <div id=\"family_".concat(id, "\" class='d-block'>\n       <div class=\"rounded p-1 m-1\" style='background-color:rgba(").concat(color[0], ",").concat(color[1], ",").concat(color[2], ",").concat(color[3], ");'>\n            <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M18.3459 21V16H19.9937C20.6897 16 21.181 15.33 20.966 14.68L18.8167 8.37C18.5301 7.55 17.7523 7 16.8721 7H16.7493C15.8691 7 15.081 7.55 14.8046 8.37L12.6553 14.68C12.4301 15.33 12.9214 16 13.6276 16H15.2754V21C15.2754 21.55 15.736 22 16.2989 22H17.3224C17.8853 22 18.3459 21.55 18.3459 21ZM16.8107 6C17.9467 6 18.8577 5.11 18.8577 4C18.8577 2.89 17.9467 2 16.8107 2C15.6746 2 14.7637 2.89 14.7637 4C14.7637 5.11 15.6746 6 16.8107 6Z\" fill=\"#FF6384\"/>\n            <path d=\"M5.53524 21V14.5H5.02349C4.46057 14.5 4 14.05 4 13.5V9C4 7.9 4.92114 7 6.04698 7H9.11746C10.2433 7 11.1644 7.9 11.1644 9V13.5C11.1644 14.05 10.7039 14.5 10.1409 14.5H9.6292V21C9.6292 21.55 9.16863 22 8.60571 22H6.55873C5.99581 22 5.53524 21.55 5.53524 21ZM7.58222 6C8.71829 6 9.6292 5.11 9.6292 4C9.6292 2.89 8.71829 2 7.58222 2C6.44614 2 5.53524 2.89 5.53524 4C5.53524 5.11 6.44614 6 7.58222 6Z\" fill=\"#007BFF\"/>\n            </svg>\n\n            ").concat(children, "\n\n          <div id=\"person_").concat(id, "\" class='d-block female'>\n            <svg  width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\">\n            <path  d=\"M13.7458 21V16H15.3936C16.0896 16 16.5809 15.33 16.3659 14.68L14.2166 8.37C13.93 7.55 13.1522 7 12.272 7H12.1492C11.269 7 10.4809 7.55 10.2045 8.37L8.0552 14.68C7.83003 15.33 8.32131 16 9.02752 16H10.6753V21C10.6753 21.55 11.1359 22 11.6988 22H12.7223C13.2852 22 13.7458 21.55 13.7458 21ZM12.2106 6C13.3467 6 14.2576 5.11 14.2576 4C14.2576 2.89 13.3467 2 12.2106 2C11.0745 2 10.1636 2.89 10.1636 4C10.1636 5.11 11.0745 6 12.2106 6Z\" fill=\"rgb(255, 99, 132)\"/>\n            </svg>\n          </div>  \n\n        <div>\n    </div>\n\n        \n        \n            \n       \n    </div>\n\n    ");
  $("people").append("".concat(family_icon));
}

marriage();

function moveablePeople() {
  $("#people").sortable({
    revert: true
  });
  $("#people").disableSelection();
}

moveablePeople();
var nobles = []; //Lists all the nobles and their props

var peasantsUnderNoble = []; //Lists all the peasants under the noble.
///////////////////////////////////////////////////////////////////////////////////

var skills = []; //var c = new Character();
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
} //console.log(p.children);
//console.log((militaryRanks.rank[3].armor += p.children));


function randomN(x) {
  return Math.floor(Math.random() * x);
}

function displayPopulationCount() {
  var displayElement = $("#population");
  displayElement.html("<h5>" + people.count + "</h5>");
}

function displayChildrenCount() {
  var displayElement = $("#children-count");
  displayElement.html("<h5>" + ++people.children + "</h5>");
}

function displayNoLongerChild() {
  var displayElement = $("#children-count");
  displayElement.html("<h5>" + --people.children + "</h5>");
}

function spawn() {
  ++people.count;
  people.person.push(new Character(0, Math.floor(Math.random() * 99 + 1)));
  displayPopulationCount();
  displayChildrenCount();
  return people.count;
}

function createPerson(age, gender) {
  ++people.count;

  if (age < 18) {
    people.person.push(new Character(age, gender));
    displayChildrenCount();
  } else {
    people.person.push(new Character(age, gender));
    displayPopulationCount();
  }

  return people.count;
}

var adam = createPerson(17, 10);
var eve = createPerson(30, 60);
/*
for(let i = 0;i<10;i++){
  console.log(people.person[i]);
};
 */

function reproduction(age, childrenCount) {
  if (_Time.play) {
    console.log("her age: ", age);

    if (age > 17 && age < 37) {
      //console.log("called at age: ", age);
      var chance = Math.round(Math.random() * 99 + 1);

      if (chance <= 25) {
        spawn();
        console.log("had child", childrenCount);
        return ++childrenCount;
      } else {
        if (childrenCount) {
          return childrenCount;
        } else {
          return 0;
        }
      }
    } else {
      return childrenCount;
    }
  } else {
    if (childrenCount) {
      return childrenCount;
    } else {
      return 0;
    }
  }
} //makes people appear


var pairs = [];

function maker(n) {
  for (var i = 1; i < people.count; i++) {
    var x = $("#person_".concat(i)).attr("id");
    /* if($('#people').children().length % 2 === 0){
        $(`#${x}`).remove();
    };  */
  } //spawns peeps


  while (n > 0) {
    spawn();
    n--;
  }
}
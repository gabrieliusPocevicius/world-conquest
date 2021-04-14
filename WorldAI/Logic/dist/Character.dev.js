// Characters are people with skills and attributes with names and habits.
// module of names
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
  families: 0,
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
      var _time = _Time.calender.yearC - _Time.calender.years - birthYear;

      var storeTime = 0;
      /* console.log('Time ',time); */

      storeTime = _time + agePassed;
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

  function display(gender, id) {
    if (age < 18) {
      displayPerson(gender, id, 14);
      var grow = setInterval(function () {
        if (_Time.play) {
          if (age >= 18) {
            displayPerson(gender, id);
            clearInterval(grow);
          }
        }
      }, 1000);
    } else {
      displayPerson(gender, id);
    }
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
    display(man.gender, man.id);
    getAttributes = man;
    var person = document.getElementById("person_".concat(man.id));
    var lifeInterval = setInterval(function () {
      if (_Time.play) {
        searchValidMate(man.id);
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
    display(woman.gender, woman.id);
    getAttributes = woman;
    var fertile = setInterval(function () {
      woman.children = reproduction(age, woman.children);
      /*   console.log(woman.children);  */

      if (age > 37) {
        clearInterval(fertile); //sterile
      }
    }, 5000);

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
    }, 1000);

    _person.addEventListener("click", function (e) {
      /*  e.stopPropagation(); */
      e.preventDefault();
      console.log("Name:", woman.name);
      console.log("gender:", woman.gender);
      console.log("age:", woman.age);
      console.log("hp:", woman.hp);
      console.log("Strength:", woman.atk);
    });

    _person.addEventListener("mouseout", function (e) {
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
/* Character.prototype.greet = (name) => {
  let timer = setInterval(() => {
    console.log(name);
  }, 2000);
  return timer;
}; */


exports.Character = Character;

function deathFunction(gender) {
  if (people.count > 0) {
    gender === "male" ? $("#male-count").text(--male) : $("#female-count").text(--female);
    people.count--;
    (0, _DataBase.displayHTML)(people.count, "#population", "h5");
    (0, _DataBase.displayHTML)(++deaths, "#deaths", "h5");
  }
}
/**
 *
 * @param {Number} id id of the searcher
 */


var searchValidMate = function searchValidMate(id) {
  var bias = Math.floor(Math.random() >= 0.5) ? true : false;
  console.log(bias);
  var searcherId = document.getElementById("person_".concat(id)).classList.contains("male"); //true if male else false

  if (id === 1) {
    var _rightPerson = document.getElementById("person_".concat(id + 1));

    if (_rightPerson.classList.contains("female")) {
      console.log("found female on the right");
      _rightPerson.style.opacity = 0.5;
    }
  } else {
    var leftPerson = document.getElementById("person_".concat(id - 1));

    if (searcherId) {
      //male searches
      if (leftPerson.classList.contains("female")) {
        //found
        leftPerson.style.opacity = 0.5;
        console.log("found female on the left");
      } else if (rightPerson.classList.contains("female")) {
        console.log("found female on the right");
        leftPerson.style.opacity = 0.5;
      }
    }
  }
};

function deathClick(e) {
  e = e || window.event;
  e.currentTarget.classList[0] === "male" ? $("#male-count").text(--male) : $("#female-count").text(--female);
  e.currentTarget.remove();
  people.count--;
  (0, _DataBase.displayHTML)(people.count, "#population", "h5");
  (0, _DataBase.displayHTML)(++deaths, "#deaths", "h5");
}

function displayPerson(gender, id) {
  var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 28;
  var color = [52, 58, 64, 1];
  var person_icon = "\n      <div  class='d-block ".concat(gender, " ' >\n        \n        <div class=\"rounded p-1 m-1 text-center\" style='background-color:rgba(").concat(color[0], ",").concat(color[1], ",").concat(color[2], ",").concat(color[3], ");'width:36px;height:36px;'>\n              <svg id=\"person_").concat(id, "\"  width=").concat(size, " height=").concat(size, " viewBox=\"0 0 24 24\" fill=\"none\">\n                  <path  d=\"M9.53524 21V14.5H9.02349C8.46057 14.5 8 14.05 8 13.5V9C8 7.9 8.92114 7 10.047 7H13.1175C14.2433 7 15.1644 7.9 15.1644 9V13.5C15.1644 14.05 14.7039 14.5 14.1409 14.5H13.6292V21C13.6292 21.55 13.1686 22 12.6057 22H10.5587C9.99581 22 9.53524 21.55 9.53524 21ZM11.5822 6C12.7183 6 13.6292 5.11 13.6292 4C13.6292 2.89 12.7183 2 11.5822 2C10.4461 2 9.53524 2.89 9.53524 4C9.53524 5.11 10.4461 6 11.5822 6Z\" fill=\"#007bff\"/>\n              </svg>\n          <div>\n      </div>\n      ");
  var f_person_icon = "\n      <div  class='d-block female ' >\n          <div class=\"rounded p-1 m-1 text-center\" style='background-color:rgba(".concat(color[0], ",").concat(color[1], ",").concat(color[2], ",").concat(color[3], ");'width:36px;height:36px;'>\n              <svg id=\"person_").concat(id, "\"  width=").concat(size, " height=").concat(size, " viewBox=\"0 0 24 24\" fill=\"none\">\n              <path  d=\"M13.7458 21V16H15.3936C16.0896 16 16.5809 15.33 16.3659 14.68L14.2166 8.37C13.93 7.55 13.1522 7 12.272 7H12.1492C11.269 7 10.4809 7.55 10.2045 8.37L8.0552 14.68C7.83003 15.33 8.32131 16 9.02752 16H10.6753V21C10.6753 21.55 11.1359 22 11.6988 22H12.7223C13.2852 22 13.7458 21.55 13.7458 21ZM12.2106 6C13.3467 6 14.2576 5.11 14.2576 4C14.2576 2.89 13.3467 2 12.2106 2C11.0745 2 10.1636 2.89 10.1636 4C10.1636 5.11 11.0745 6 12.2106 6Z\" fill=\"rgb(255, 99, 132)\"/>\n              </svg>\n          </div>\n      </div>\n      ");

  if (gender == "female") {
    person_icon = f_person_icon;
  }

  var person = document.getElementById("person_".concat(id));

  if (!person) {
    console.log('executed display icon');
    $("people").append("".concat(person_icon)); //Creates the icon figure of a person to the screen
  } else {
    person.setAttribute('class', 'growth');
    person.setAttribute("width", "".concat(size, "px"));
    person.setAttribute("height", "".concat(size, "px"));
    var removed = setTimeout(function () {
      person.classList.remove("growth");
    }, 2000);
    clearTimeout(removed);
  }
}

function displayCouple(id) {
  //for it to happen both need to be adults male and female when this condition is met the reproduction method interval is triggered
  var color = [52, 58, 64, 1];
  var family_icon = "\n    <div id=\"family_".concat(id, "\" class='d-block'>\n\n       <div class=\"rounded p-1 m-1\" style='background-color:rgba(").concat(color[0], ",").concat(color[1], ",").concat(color[2], ",").concat(color[3], ");'>\n             <svg id=\"person_").concat(id, "\"  width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\">\n                <path  d=\"M9.53524 21V14.5H9.02349C8.46057 14.5 8 14.05 8 13.5V9C8 7.9 8.92114 7 10.047 7H13.1175C14.2433 7 15.1644 7.9 15.1644 9V13.5C15.1644 14.05 14.7039 14.5 14.1409 14.5H13.6292V21C13.6292 21.55 13.1686 22 12.6057 22H10.5587C9.99581 22 9.53524 21.55 9.53524 21ZM11.5822 6C12.7183 6 13.6292 5.11 13.6292 4C13.6292 2.89 12.7183 2 11.5822 2C10.4461 2 9.53524 2.89 9.53524 4C9.53524 5.11 10.4461 6 11.5822 6Z\" fill=\"#007bff\"/>\n            </svg>\n            \n            <svg id=\"person_").concat(id, "\"  width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\">\n            <path  d=\"M13.7458 21V16H15.3936C16.0896 16 16.5809 15.33 16.3659 14.68L14.2166 8.37C13.93 7.55 13.1522 7 12.272 7H12.1492C11.269 7 10.4809 7.55 10.2045 8.37L8.0552 14.68C7.83003 15.33 8.32131 16 9.02752 16H10.6753V21C10.6753 21.55 11.1359 22 11.6988 22H12.7223C13.2852 22 13.7458 21.55 13.7458 21ZM12.2106 6C13.3467 6 14.2576 5.11 14.2576 4C14.2576 2.89 13.3467 2 12.2106 2C11.0745 2 10.1636 2.89 10.1636 4C10.1636 5.11 11.0745 6 12.2106 6Z\" fill=\"rgb(255, 99, 132)\"/>\n            </svg>\n          \n        <div>\n    </div>\n\n        \n\n    </div>\n\n    ");
  $("people").append("".concat(family_icon));
}

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
var eve = createPerson(16, 60);
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
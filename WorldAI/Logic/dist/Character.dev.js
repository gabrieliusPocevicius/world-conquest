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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var id = 0; // the id of each object of the Character class

var nationality = [];
var surnames = [];
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
var getAttributes = {};
var timeGoes = false;
var displayUserInfo = document.getElementById("information-display");
displayUserInfo.style.opacity = "0"; // removes the time from the people's age

/*  let timePaused = 0; 

        const start = Date.now();
        setInterval(() => {
            
            const millis = Date.now() - start;
            timePaused =  Math.floor(millis / 1000);
            console.log(`%c ${timePaused}`, 'color:orange;', "paused");
 }, 1000);  */
// expected output: seconds elapsed = 2

var Character = function Character(age) {
  var _this = this;

  _classCallCheck(this, Character);

  Object.create(null);
  var skill = 0;

  function qaulities() {
    var work = (0, _Util.getRandom)(0, 100);

    if (work > 1) {
      skill++;
      qaulities();
    }

    ;
    console.log('skills ', skill);
  }

  ;
  var percent = Math.floor(Math.random() * 99 + 1); //50% change of it being a boy for a girl.

  /* let dna = getRandom(0,1000);*/

  this.id = id += 1;
  /* let random = getRandom(0,6); */

  /* this.title = `${job[random].name}`; */

  /* console.log(this.title); */

  if (percent <= 50) {
    var maleTemplate = function maleTemplate() {
      _this.name = _DataBase.names[(0, _Util.getRandom)(0, 400)];
      _this.gender = "male";
      _this.age = age;
      _this.hp = 100;
      _this.atk = (0, _Util.getRandom)(0, 100);
      _this.armour = 0;
      _this.wealth = 0;

      function wallet() {
        console.log(this.name, 'has', this.wealth);
      }

      _this.risk = 0;
      ++male;
      var birthday = Date.now();
      $("#male-count").text(male);
      var info = {
        name: _this.name,
        gender: _this.gender,
        age: _this.age,
        hp: _this.hp,
        atk: _this.atk,
        armour: _this.armour,
        id: _this.id,
        wealth: _this.wealth
      };
      displayPerson(info.gender, info.id);
      var person = document.getElementById("person_".concat(info.id));
      person.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("hello", info.name);
      });
      var displayInfoIds = {
        "info-name": info.name,
        "info-gender": info.gender,
        "info-age": info.age,
        "info-health": info.hp,
        "info-attack": info.atk,
        "info-armour": info.armour,
        "info-id": info.id,
        "info-wealth": info.wealth
      };
      getAttributes = displayInfoIds;
      /* person.addEventListener("mouseout", (e) => {
        e.preventDefault();
        if(!displayInfo){
          displayUserInfo.style.opacity = "0";
        }
        
      }); */

      person.addEventListener("mouseover", function (e) {
        e.preventDefault();
        displayUserInfo.style.opacity = "1";
        info.age = Math.floor((Date.now() - birthday - timePaused) / (_Time.speed * 360));
        displayInfoIds["info-age"] = info.age;
        var keys = Object.keys(displayInfoIds);
        var props = Object.values(displayInfoIds);

        for (var i = 0; i < keys.length; i++) {
          document.getElementById(keys[i]).innerHTML = props[i];
        }
      });
    };

    qaulities();
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
      _this.wealth = 0;

      function wallet() {
        console.log(this.name, 'has', this.wealth);
      }

      ++female;
      var birthday = Date.now();
      $("#female-count").text(female);
      var info = {
        name: _this.name,
        gender: _this.gender,
        age: _this.age,
        hp: _this.hp,
        atk: _this.atk,
        armour: _this.armour,
        id: _this.id,
        wealth: _this.wealth
      };
      displayPerson(info.gender, info.id);
      var person = document.getElementById("person_".concat(info.id));
      person.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("hello", info.name);
      });
      var displayInfoIds = {
        "info-name": info.name,
        "info-gender": info.gender,
        "info-age": info.age,
        "info-health": info.hp,
        "info-attack": info.atk,
        "info-armour": info.armour,
        "info-id": info.id,
        "info-wealth": info.wealth
      };
      /* person.addEventListener("mouseout", (e) => {
        e.preventDefault();
        if(!displayInfo){
            displayUserInfo.style.opacity = "0";
        };
        
      }); */

      person.addEventListener("mouseover", function (e) {
        e.preventDefault();
        displayUserInfo.style.opacity = "1";
        info.age = Math.floor((Date.now() - birthday) / (_Time.speed * 360));
        displayInfoIds["info-age"] = info.age;
        var keys = Object.keys(displayInfoIds);
        var props = Object.values(displayInfoIds);

        for (var i = 0; i < keys.length; i++) {
          document.getElementById("".concat(keys[i])).innerHTML = props[i];
        }

        ;
      });
    };

    qaulities();
    femaleTemplate();
  }
};

exports.Character = Character;

function startTimer() {
  var btn = document.getElementById('start');
  var timer = document.getElementById('timer-test');

  if (!timeGoes) {
    btn.onclick = function (e) {
      var timePaused = 0;
      var birthday = Date.now();
      e.preventDefault();
      setInterval(function () {
        console.log('time paused', timePaused);
        age = Math.floor((Date.now() - birthday - timePaused) / 1000);
        console.log("%c ".concat(age), 'color:green;', "Age");
        timer.innerHTML = age.toFixed(2);
        timeGoes = true;
        return console.log('returned age : ', age);
      }, 1000);
    };
  }
}

;

function pauseTimer() {
  var btn = document.getElementById('paused');
  var timer = document.getElementById('timer-pause');
  var trueAge = document.getElementById('true-age');

  btn.onclick = function (e) {
    var timePaused = 0;
    /* let birthday = Date.now(); */

    if (timeGoes) {
      e.preventDefault();
      timePaused = 0;
      console.log('pause');
      var start = Date.now();
      setInterval(function () {
        var millis = Date.now() - start;
        timePaused = Math.floor(millis / 1000);
        age = age - timePaused;
        console.log('Age', age, 'should not increase');
        trueAge.innerHTML = age;
        /* console.log(`%c ${}`, 'color:orange;', "paused"); */

        document.getElementById('timer-pause').innerHTML = "<div class='text-danger'>".concat(timePaused, "</div>"); // expected output: seconds elapsed = 2
      }, 1000);
    }
  };
}

;
/* startTimer();
pauseTimer(); */

function deathFunction(id) {
  if (people.count > 0) {
    id.classList[id.classList.length - 1] === "male" ? $("#male-count").text(--male) : $("#female-count").text(--female);
    id.remove();
    people.count--;
    (0, _DataBase.displayHTML)(people.count, "#population", "h5");
    (0, _DataBase.displayHTML)(exports.deaths = deaths = +deaths + 1, "#deaths", "h5");
  }
}

function deathClick(e) {
  e = e || window.event;
  e.currentTarget.classList[0] === "male" ? $("#male-count").text(--male) : $("#female-count").text(--female);
  e.currentTarget.remove();
  people.count--;
  (0, _DataBase.displayHTML)(people.count, "#population", "h5");
  (0, _DataBase.displayHTML)(exports.deaths = deaths = +deaths + 1, "#deaths", "h5");
}

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

function moveablePeople() {
  $("#people").sortable({
    revert: true
  });
  $("#people").disableSelection();
}

;
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
} //console.log(p.armour);
//console.log((militaryRanks.rank[3].armor += p.armour));


function randomN(x) {
  return Math.floor(Math.random() * x);
}

var food = {
  count: 0,
  food: []
};
exports.food = food;

function displayPopulationCount() {
  var displayElement = $("#population");
  displayElement.html("<h5>" + people.count + "</h5>");
}

function spawn() {
  ++people.count;
  people.person.push(new Character());
  displayPopulationCount();
  return people.count;
}

function createPerson(age) {
  ++people.count;
  people.person.push(new Character(age));
  displayPopulationCount();
  return people.count;
}

var adam = createPerson(25);
var eve = createPerson(18); //makes people appear

var pairs = [];

function maker(n) {
  for (var i = 1; i < people.count; i++) {
    var x = $("#person_".concat(i)).attr('id');
    /* if($('#people').children().length % 2 === 0){
       
       $(`#${x}`).remove();
    };  */
  }

  while (n > 0) {
    spawn();
    n--;
  }

  ;
}

;
var re = /dfds/;
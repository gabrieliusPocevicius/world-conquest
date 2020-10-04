"use strict";

var _Character = require("./World AI/Logic/Character");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hideIt() {
  return $('#key_infomation').remove();
}

; //Join returned the array as a string
//reduce reduces the array into a single value

var total = 1;
var numberCounter1 = 0;
var numberCounter2 = 0; //Recruits team 1 

function team_1() {
  if (numberCounter1 >= 0) {
    $("body").on("keydown", function (event) {
      //S to remove
      if (event.which == "83") {
        if (numberCounter1 == 0) {
          numberCounter1 = 0;
        } else {
          teamOne.health.pop();
          teamOne.attack.pop();
          teamOne.armour.pop();
          $("#team1Score").text(teamOne.totalAttack);
          numberCounter1--;
          $("#guy1:last-child").remove();
        }
      } //W to add
      else if (event.which == "87" && numberCounter1 != 20) {
          numberCounter1++;
          run();
        }
    });
  }
} //Recruits team 2


function team_2() {
  if (numberCounter2 >= 0) {
    $("body").on("keydown", function (event) {
      //S to remove
      if (event.which == "40") {
        if (numberCounter2 == 0) {
          numberCounter2 = 0;
        } else {
          teamTwo.health.pop();
          teamTwo.attack.pop();
          teamTwo.armour.pop();
          $("#team2Score").text(teamTwo.totalAttack);
          numberCounter2--;
          $("#guy2:last-child").remove();
        }
      } //W to add
      else if (event.which == "38" && numberCounter2 != 20) {
          numberCounter2++;
          run2();
        }
    });
  }
}

function battleScreen() {
  // adds option of troops gathering together to fight
  team_1();
  team_2();
}

battleScreen(); // $("body").on("click", function() {
//     $("#guy1").remove();
// })
// var slidecontainer = document.querySelector(".slidecontainer");
// var slider1 = document.getElementById("myRange1");
// var slider2 = document.getElementById("myRange2");
// var output1 = document.getElementById("display1");
// var output2 = document.getElementById("display2");
// slider1.oninput = function() {
//     var v1 = output1.innerHTML = this.value;
// };
// slider2.oninput = function() {
//     var v2 = output2.innerHTML = this.value;
// }

function health() {
  return 100;
}

var id = 0;

var Charactor = function Charactor(name) {
  _classCallCheck(this, Charactor);

  this.name = name;
  this.health = health();
  this.attack = random();
  this.armour = random();

  this.id = function () {
    return id++;
  };
};

function random() {
  var random = Number(Math.round(Math.random() * 99) + 1);
  return random;
}

var teamOne = {
  //Single column of indexes indicates one dude
  attack: [],
  health: [],
  armour: [],

  //adds together all of the values to get the army total
  get totalAttack() {
    return this.attack.reduce(function (a, b) {
      return a + b;
    }, 0);
  },

  get totalHealth() {
    return this.health.reduce(function (a, b) {
      a + b, 0;
    });
  },

  get totalArmour() {
    return this.armour.reduce(function (a, b) {
      a + b, 0;
    });
  }

};
var teamTwo = {
  /*
  Function get values of all the knights
  */
  //Single column of indexes indicates one dude
  attack: [],
  health: [],
  armour: [],

  //adds together all of the values to get the army total
  // use the get function to get attributes of this object
  get totalAttack() {
    return this.attack.reduce(function (a, b) {
      return a + b;
    }, 0);
  },

  get totalHealth() {
    return this.health.reduce(function (a, b) {
      a + b, 0;
    });
  },

  get totalArmour() {
    return this.armour.reduce(function (a, b) {
      a + b, 0;
    });
  }

};
console.log(teamTwo); //Display Soldier on team 1

function run() {
  var p = new Charactor('Henry The Knight ');

  for (var i = 0; i < total; i++) {
    teamOne.health.push(p.health);
    teamOne.attack.push(p.attack);
    teamOne.armour.push(p.armour);
    console.log("T1:" + teamOne.totalAttack); //Create a person instant and loop 
    //guy 1 is for all team

    var person = "<tr id='guy1'>\
        <td id=p-" + i + ">" + numberCounter1 + "</td>\
        <td id='name'>" + p.name + " " + p.id() + "</td>\
        <td>\
        <div class='progress'>\
            <div id='bar-health' style='width:" + p.health + "%' class='progress-bar bar-health progress-bar-striped progress-bar-animated' role='progressbar'>" + p.health + "</div>\
        </div>\
    </td>\
        <td>\
            <div class='progress'>\
                <div class='progress-bar bar-armour progress-bar-striped progress-bar-animated' style='width:" + p.armour + "%'>" + p.armour + "</div>\
            </div>\
        </td>\
        <td>\
        <div class='progress'>\
            <div id='bar-attack' style='width:" + p.attack + "%' class='progress-bar bar-attack progress-bar-striped progress-bar-animated'>" + p.attack + "</div>\
        </div>\
    </td>\
        </tr>";
    $("#create").append(person);
    $("#team1Score").text(teamOne.totalAttack);
  }
}

function fight(len) {
  var i = 0;
  len = len.length;

  while (i < len) {
    //code here
    ++i;
  }
} //Display Soldier on team 1


function run2() {
  var p = new Charactor('Henry The Knight ');

  for (var i = 0; i < total; i++) {
    //Create a person instant and loop 
    teamTwo.health.push(p.health);
    teamTwo.attack.push(p.attack);
    teamTwo.armour.push(p.armour);
    console.log("T2:" + teamTwo.totalAttack);
    var person = "<tr id='guy2'>\
            <td>\
            <div class='progress'>\
                <div id='bar-attack' style='width:" + p.attack + "%' class='progress-bar bar-attack progress-bar-striped progress-bar-animated'>" + p.attack + "</div>\
            </div>\
        </td>\
        <td>\
            <div class='progress'>\
                <div class='progress-bar bar-armour progress-bar-striped progress-bar-animated' style='width:" + p.armour + "%'>" + p.armour + "</div>\
            </div>\
        </td>\
        <td>\
        <div class='progress'>\
            <div id='bar-health' style='width:" + p.health + "%' class='progress-bar bar-health progress-bar-striped progress-bar-animated' role='progressbar'>" + p.health + "</div>\
        </div>\
    </td>\
    <td id='name'>" + p.name + " " + p.id() + "</td>\
    <td id=p-" + i + ">" + numberCounter2 + "</td>\
        </tr>";
    $("#create2").append(person);
    $("#team2Score").text(teamTwo.totalAttack);
  }
} //run 2 Team two
//Object.keys(p).length
//no battle at the moment.


function nobattle() {
  $(".all-teams").hide();
} //Yes there is a battle.


function yesbattle() {
  $(".all-teams").show();
} //first Team has not arrived at battle zone


function hideTeam1() {
  $("#table-header-1").hide();
  $("#table-header-1:children").hide();
} //Second Team has not arrived at battle zone


function hideTeam2() {
  $("#table-header-2").hide();
  $("#table-header-2:children").hide();
} //wnobattle();
// var people = []


var p = new _Character.Character();
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',
  // The data for our dataset
  data: {
    labels: ['Health', 'Strength', 'Age'],
    datasets: [{
      label: p.name,
      backgroundColor: ['#20c997', '#343a40', 'rgb(255, 99, 132)'],
      borderColor: ['#20c997', '#343a40', 'rgb(255, 99, 132)'],
      data: [p.hp, p.atk, p.age]
    }]
  },
  // Configuration options go here
  options: {}
});
console.log("Hello");
setTimeout(function () {
  chart.data.datasets[0].data[0] = 50;
  chart.update();
}, 1000);
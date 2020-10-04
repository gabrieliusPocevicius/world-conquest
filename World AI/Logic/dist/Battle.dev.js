"use strict";

var _Character = require("./Character.js");

function hideIt() {
  return $('#key_infomation').remove();
}

;
hideIt(); //no battle at the moment.

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
} //Join returned the array as a string
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
          group.pop();
          console.log(group.length);
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
          group.pop();
          console.log(group.length);
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
//generate r number

function random(num) {
  var random = Number(Math.round(Math.random() * num) + 1);
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
var group = []; //array for keeping all the knights from one team

var group2 = []; //Display Soldier on team 1

function run() {
  var p = new _Character.Character();
  group.push(p);

  for (var i = 0; i < total; i++) {
    teamOne.health.push(p.hp);
    teamOne.attack.push(p.atk);
    teamOne.armour.push(p.armour); //Create a person instant and loop 
    //guy 1 is for all team

    var person = "<tr id='guy1'>\
        <td id=p-" + i + ">" + numberCounter1 + "</td>\
        <td id='name'>" + p.name + " " + p.age + "</td>\
        <td>\
        <div class='progress'>\
            <div id='bar-health' style='width:" + p.hp + "%' class='progress-bar bar-health progress-bar-striped progress-bar-animated' role='progressbar'>" + p.hp + "</div>\
        </div>\
    </td>\
        <td>\
            <div class='progress'>\
                <div class='progress-bar bar-armour progress-bar-striped progress-bar-animated' style='width:" + p.armour + "%'>" + p.armour + "</div>\
            </div>\
        </td>\
        <td>\
        <div class='progress'>\
            <div id='bar-attack' style='width:" + p.atk + "%' class='progress-bar bar-attack progress-bar-striped progress-bar-animated'>" + p.atk + "</div>\
        </div>\
    </td>\
        </tr>";
    $("#create").append(person);
    $("#team1Score").text(teamOne.totalAttack);
    console.log(group); //how many knights fighting in this team.

    fight();
  }
} //Display Soldier on team 2


function run2() {
  var p = new _Character.Character();
  group2.push(p);

  for (var i = 0; i < total; i++) {
    //Create a person instant and loop 
    teamTwo.health.push(p.hp);
    teamTwo.attack.push(p.atk);
    teamTwo.armour.push(p.armour);
    var person = "<tr id='guy2'>\
            <td>\
            <div class='progress'>\
                <div id='bar-attack' style='width:" + p.atk + "%' class='progress-bar bar-attack progress-bar-striped progress-bar-animated'>" + p.atk + "</div>\
            </div>\
        </td>\
        <td>\
            <div class='progress'>\
                <div class='progress-bar bar-armour progress-bar-striped progress-bar-animated' style='width:" + p.armour + "%'>" + p.armour + "</div>\
            </div>\
        </td>\
        <td>\
        <div class='progress'>\
            <div id='bar-health' style='width:" + p.hp + "%' class='progress-bar bar-health progress-bar-striped progress-bar-animated' role='progressbar'>" + p.hp + "</div>\
        </div>\
    </td>\
    <td id='name'>" + p.name + " " + p.id() + "</td>\
    <td id=p-" + i + ">" + numberCounter2 + "</td>\
        </tr>";
    $("#create2").append(person);
    $("#team2Score").text(teamTwo.totalAttack);
    console.log(group2);
    fight();
  }
} //run 2 Team two
//Object.keys(p).length
//wnobattle();


function maker(n) {
  while (n > 0) {
    people.push(new _Character.Character(n));
    n--;
  }

  return people;
} //two knights need to wait for opponent before he arrives


function waitingFight(opponent, opponent2) {
  console.log("Waiting...opponent");
  array.forEach(function (element) {});
}

function fight() {
  var flipCoin = random(1);
  console.log(flipCoin);
  var wait = true;
  var attk = 0;
  group.length == 0 && group2.length == 0 || group.length == 0 && group2.length == 1 || group.length == 1 && group2.length == 0 ? wait : attk = 1;
  group > 0 && group2 > 0 ? attk = 1 : wait;

  if (attk == 1) {
    //first strike
    var leftHp = group2[0].hp - group[0].atk;
    console.warn(group[0].name + " hit " + group2[0].name + " with -" + group[0].atk + ". " + group2[0].name + "'s HP left " + leftHp);
  }
} //var i = 0;
//len = len.length;
//while (i < len) {
//  ++i
//}


var ctx = document.getElementById('myChart').getContext('2d');
var p = new _Character.Character();
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',
  // The data for our dataset
  data: {
    labels: ['Attack', 'Armour', 'Health', 'Age'],
    datasets: [{
      label: p.name,
      backgroundColor: ['rgb(255, 99, 132)', '#343a40', '#20c997', '#007bff'],
      borderColor: ['rgb(255, 99, 132)', '#343a40', '#20c997', '#007bff'],
      data: [0, 0, 0, p.age]
    }]
  },
  // Configuration options go here
  options: {}
});
setTimeout(function () {
  chart.data.datasets[0].data[0] = p.atk;
  chart.data.datasets[0].data[1] = p.armour;
  chart.data.datasets[0].data[2] = p.hp;
  chart.update();
}, 500); // Set line width
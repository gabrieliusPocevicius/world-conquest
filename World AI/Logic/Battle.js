import { Character } from "./Character.js";
export var battleTrue = false;

var group = []; //array for keeping all the knights from one team
var group2 = [];
var damage = 0; //damage is the knights atk done to another's hp



//arrows to move ect...

$("#start-battle-btn").on("click", (e) => {
    e.preventDefault();
    console.log("Attack");
    let template = document.getElementById('battleScene');
    let templateContent = template.content;
    $(templateContent).appendTo($("#timer").slideDown("fast"));
});





function stopKeysUpDown() {
    var keys = {};
    window.addEventListener("keydown",
        function(e) {
            keys[e.keyCode] = true;
            switch (e.keyCode) {
                case 37:
                case 39:
                case 38:
                case 40: // Arrow keys
                case 32:
                    e.preventDefault();
                    break; // Space
                default:
                    break; // do not block other keys
            }
        },
        false);
    window.addEventListener('keyup',
        function(e) {
            keys[e.keyCode] = false;
        },
        false);

}
stopKeysUpDown();
//no battle at the moment.
function nobattle() {
    $(".all-teams").hide();
}
//Yes there is a battle.
function yesbattle() {
    $(".all-teams").show();
}
//first Team has not arrived at battle zone
function hideTeam1() {
    $("#table-header-1").hide();
    $("#table-header-1:children").hide();
}
//Second Team has not arrived at battle zone
function hideTeam2() {
    $("#table-header-2").hide();
    $("#table-header-2:children").hide();
}
//Join returned the array as a string
//reduce reduces the array into a single value
var total = 1;
let numberCounter1 = 0;
let numberCounter2 = 0;

//Recruits team 1 
function team_1() {
    if (numberCounter1 >= 0) {
        $("body").on("keydown", function(event) {
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

            }
            //W to add
            else if (event.which == "87" && numberCounter1 != 20) {
                numberCounter1++;
                run();
            }

        });
    }
}

//Recruits team 2
function team_2() {
    if (numberCounter2 >= 0) {
        $("body").on("keydown", function(event) {
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

            }
            //W to add
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

battleScreen();

$("#fight-btn").on("click", () => {
    fight();
})



// $("body").on("click", function() {

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
    get totalAttack() { return this.attack.reduce((a, b) => a + b, 0) },
    get totalHealth() { return this.health.reduce((a, b) => { a + b, 0 }) },
    get totalArmour() { return this.armour.reduce((a, b) => { a + b, 0 }) }


}
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
    get totalAttack() { return this.attack.reduce((a, b) => a + b, 0) },
    get totalHealth() { return this.health.reduce((a, b) => { a + b, 0 }) },
    get totalArmour() { return this.armour.reduce((a, b) => { a + b, 0 }) }


}

var personDamaged = {

    id: 0,
    name: "",
    hp: 0


};

//Display Soldier on team 1
function run() {

    var p = new Character();
    group.push(p);







    for (let i = 0; i < total; i++) {

        teamOne.health.push(p.hp);
        teamOne.attack.push(p.atk);
        teamOne.armour.push(p.armour);


        personDamaged.hp = p.hp;
        console.log(personDamaged.hp);
        //Create a person instant and loop 
        //guy 1 is for all team
        var person =
            "<tr id='guy1'>\
        <td id=p-" + i + ">" + numberCounter1 + "</td>\
        <td id='name'>" + p.name + " " + p.age + "</td>\
        <td>\
        <div class='progress'>\
            <div id='bar-health' style='width:" + (p.hp - damage) + "%' class='progress-bar bar-health progress-bar-striped progress-bar-animated' role='progressbar'>" + (p.hp - damage) + "</div>\
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
        </tr>"

        $("#create").append(person);

        $("#team1Score").text(teamOne.totalAttack);
        //console.log(group); //how many knights fighting in this team.

    }
    return personDamaged.hp;
}



//Display Soldier on team 2
function run2() {
    var p = new Character();

    group2.push(p);


    for (let i = 0; i < total; i++) {

        //Create a person instant and loop 
        teamTwo.health.push(p.hp);
        teamTwo.attack.push(p.atk);
        teamTwo.armour.push(p.armour);

        var person =
            "<tr id='guy2'>\
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
        </tr>"
        $("#create2").append(person);


        $("#team2Score").text(teamTwo.totalAttack);







    }
}
//run 2 Team two
//Object.keys(p).length



//nobattle();



var barC = 0;




//Testing Battle Sim with Pie charts

for (var i = 0; i < 100; i++) {
    var ctx = document.createElement("canvas");

    ctx.getContext('2d');
    var t1 = 0;
    var t2 = 0;
    var update = setTimeout(function() { return i++ }, 100)
    var chart = new Chart(ctx, {
        // The type of chart we want to create

        type: 'pie',

        // The data for our dataset
        data: {
            labels: ['Enemy', 'Friendly'],
            datasets: [{
                label: "War",
                backgroundColor: ['rgb(255, 99, 132)', '#007bff'],
                borderColor: ['rgb(255, 99, 132)', '#007bff'],
                data: [50, t1],
            }]
        },
    });








}



$("#timer").append(ctx)


function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}


//here is a working module of graphs for each person
/* for (let i = 0; i < 1; ++i) {
    var p = new Character();
    console.log(p.info());

    barC++;
    console.log(barC);

    var ctx = document.createElement("canvas");

    ctx.getContext('2d');

    var chart = new Chart(ctx, {
        // The type of chart we want to create

        type: 'pie',

        // The data for our dataset
        data: {
            labels: ['Attack', 'Armour', 'Health', 'Age'],
            datasets: [{
                label: p.name,
                backgroundColor: ['rgb(255, 99, 132)', '#343a40', '#20c997', '#007bff'],
                borderColor: ['rgb(255, 99, 132)', '#343a40', '#20c997', '#007bff'],
                data: [p.atk, p.armour, p.hp, p.age],
            }]
        },
    });

    $(ctx).appendTo("#timer");
} */





//two knights need to wait for opponent before he arrives
function waitingFight(opponent, opponent2) {
    console.log("Waiting...opponent");
    array.forEach(element => {

    });
}




function fight() {
    console.log("hello Fighting System");
    console.log(group);
    console.log(group2);

    if (group.length > 0 && group2.length > 0) {
        console.log("hostility");



        for (let i = 0; i < group.length; i++) {
            if (group2[i].atk < 0) {
                return group2[i].atk = 0;
            }

            damage = group2[0].atk;
            console.log("Damage:" + damage);
            return damage; //damage updates display
        }

        for (let i = 0; i < group2.length; i++) {
            damage = group[i].hp - group2[i].atk;
            console.log(damage);
            return damage; //damage updates display
        }



    } else {
        console.log("waiting on enemy");
    }

    return damage;

}


//var i = 0;
//len = len.length;
//while (i < len) {



//  ++i
//}









/* setTimeout(() => {


    chart.data.datasets[0].data[0] = p.atk;
    chart.data.datasets[0].data[1] = p.armour;
    chart.data.datasets[0].data[2] = p.hp;
    chart.data.datasets[0].data[3] = p.age;
    chart.update();
}, 500);
 */


/* $("#remove-info-btn").on("click", (e) => {
    e.preventDefault();
    $('#key_infomation').remove("slow");
})
 */
// Set line width



/* 
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}); */
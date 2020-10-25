//import { Character } from "./Character.js";







export var battleTrue = false;

(function() {
    let armyTemplate =
        `<button class="accordion shadow-sm">Army Name </button>
        <div class="panel ">
            <div class="row">
                <h5 class="col">Leader
                    <p id="open-card">John Doe</p>
                </h5>
                <h5 class="col">Treasurer</h5>
                <h5 class="col">Logistics Manager</h5>
                <h5 class="col">Strategist training</h5>
                <h5 class="col">Loyalty</h5>
            </div>
        </div>`;
    $("#parent-of-all-armies").append(armyTemplate);
}());






//Person attribute card



$("#open-card").on("click", () => {
    $("#myNav").css("height", 100 + "%");
});

$("#closebtn").on("click", () => {
    $("#myNav").css("height", 0 + "%");
});




//arrows to move ect...
var counter = 0;
$('#battleScene').hide();
$("#start-battle-btn").on("click", () => {


    counter++;
    console.log(counter);

    if (counter == 1) {
        $("#battleScene").slideDown("fast");
    }

    if (counter == 2) {
        $('#battleScene').hide();

        counter = 0;
    }
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


$("#fight-btn").on("click", () => {
    fight();
});



function fight() {
    console.log("Fighting");
}
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

//run 2 Team two
//Object.keys(p).length



//nobattle();
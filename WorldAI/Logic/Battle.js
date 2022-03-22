export let battleTrue = false;

import { Character, people } from "./Character.js";

(function() {
    /* The rules for creating an army
    The people can't have an organized group like the army
    Without Leaders
    There are four main leader positions available
    if there is no one to lead the army disbands.
    To qualify to become a general of an army one 
 */

    var armyLeaders = [1];
    if (armyLeaders.length != 0) {
        var armyTemplate = `<button class="accordion shadow-sm">${
      armyLeaders[0]
    }'s Army </button>
        <div class="panel ">
            <div class="row">

                <h5 class="col">Leader
                    <p id="open-card">${null}</p>
                </h5>
                <h5 class="col">Treasurer <p>Incharge of the funds</p></h5>
                <h5 class="col">Logistics <p>Incharge of supply</p></h5>
                <h5 class="col">Strategist <p>highest ranking officer</p></h5>
                
            </div>
        </div>`;
        $("#parent-of-all-armies").append(armyTemplate);
    }
})();

//Person attribute card

function openPersonDataCard() {
    $("#open-card").on("click", () => {
        $("#myNav").css("height", 100 + "%");
    });

    $("#closebtn").on("click", () => {
        $("#myNav").css("height", 0 + "%");
    });
}
openPersonDataCard();

//arrows to move ect...
var counter = 0;
$("#battleScene").hide();
$("#start-battle-btn").on("click", () => {
    counter++;
    console.log(counter);

    if (counter == 1) {
        $("#battleScene").slideDown("fast");
    }

    if (counter == 2) {
        $("#battleScene").hide();

        counter = 0;
    }
});

function stopKeysUpDown() {
    var keys = {};
    window.addEventListener(
        "keydown",
        function(e) {
            keys[e.key] = true;
            switch (e.key) {
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
        false
    );
    window.addEventListener(
        "keyup",
        function(e) {
            keys[e.key] = false;
        },
        false
    );
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
const diedIcon = `
<svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 19H2C2 15.6863 4.68629 13 8 13C11.3137 13 14 15.6863 14 19H12C12 16.7909 10.2091 15 8 15C5.79086 15 4 16.7909 4 19ZM20.294 15.706L18 13.413L15.707 15.706L14.293 14.292L16.585 12L14.293 9.707L15.707 8.293L18 10.586L20.293 8.293L21.707 9.707L19.414 12L21.707 14.293L20.294 15.706ZM8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C11.9972 10.208 10.208 11.9972 8 12ZM8 6C6.9074 6.00111 6.01789 6.87885 6.00223 7.97134C5.98658 9.06383 6.85057 9.9667 7.94269 9.99912C9.03481 10.0315 9.95083 9.1815 10 8.09V8.49V8C10 6.89543 9.10457 6 8 6Z" fill="#2E3A59"/>
</svg>
`;








function soldierTemplate() {
    return `
    <span id="unit001" class="bg-light rounded shadow-sm "> 
             <svg id="alive-svg" width="50"  height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 19H6C6 15.6863 8.68629 13 12 13C15.3137 13 18 15.6863 18 19H16C16 16.7909 14.2091 15 12 15C9.79086 15 8 16.7909 8 19ZM12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C15.9972 10.208 14.208 11.9972 12 12ZM12 6C10.9074 6.00111 10.0179 6.87885 10.0022 7.97134C9.98658 9.06383 10.8506 9.9667 11.9427 9.99912C13.0348 10.0315 13.9508 9.1815 14 8.09V8.49V8C14 6.89543 13.1046 6 12 6Z" fill="#2E3A59"/>
                </svg>
<div  class="text-center font-weight-light">100</div>
</span>
`;
}

let left_flank_men = 500;
$("#unit001").on("click", () => {
    //$("#left-flank-svg").append(diedIcon);
    $("#unit001").hide();
});

function displayUpdatedArmy() {
    function updateArmy() {
        //console.log("Called The function");
        for (let i = 0; i < people.count; i++) {
            $(".armySlots").append(soldierTemplate());
        }
    }

    setInterval(updateArmy(), 1000);
}
displayUpdatedArmy();
// Characters are people with skills and attributes with names and habits.

// module of names

import { names, fnames, sickness, militaryRanks } from "./DataBase.js";
import { getRandom } from "./Util.js";
import { time, age } from "./Time.js";

/*import {alive, lifeStage, time} from './Time.js';
 */
var id = 0; // the id of each object of the Character class
var nationality = [];
var surnames = [];
var it = 0; // separate iterator for NAMES
var gen = ["Male", "Female"];
var percent = Math.round(Math.random() * 99 + 1);

/*

    We need Four kingdoms and therefore four kings.
    North, East, West, and South.


*/
export class Character {
    constructor() {
        var percent = Math.round(Math.random() * 99 + 1);
        //50% change of it being a boy for a girl.
        this.title = "Baby";
        if (percent <= 60) {
            //MAKE IT 60 TO BE A man
            this.gender = "#007bff";
            this.hp = 100;
            this.atk = getRandom(0, 100);
            this.armour = 0;
            this.risk = 0;

            this.age = 0;

            this.name = names[getRandom(0, 400)];
            console.log(
                "Name: " +
                this.name +
                "\n" +
                "Health: " +
                this.hp +
                "\n" +
                "Strength: " +
                this.atk +
                "\n" +
                "Age: " +
                this.age +
                "\n" +
                gen[0]
            );
        } else {
            this.gender = "rgb(255, 99, 132)";
            this.name = fnames[getRandom(0, 400)];
            this.hp = 100;
            this.atk = getRandom(0, 60);
            this.armour = 0;
            this.risk = 0;
            this.age = 0;
            console.log(
                "Name: " +
                this.name +
                "\n" +
                "\n" +
                "Health: " +
                this.hp +
                "\n" +
                "Strength: " +
                this.atk +
                "\n" +
                "Age: " +
                this.age +
                "\n" +
                gen[1]
            );
        }
        this.id = function() {
            return id++;
        };
        this.age = age;
    }
}

const p = new Character();
p.age = 50;

function bio() {
    $("person").append(`<div class="row" style="background-color:${p.gender}">
    
  <h5 class="col-12">${p.title}</h5>
  <div class="col">Name ${p.name}</div>
  <div class="col">Armour ${p.armour}</div>
  <div class="col">Strength ${p.atk}</div>
<div class="col">Age ${p.age}</div>
</div> `);
}
bio();

let nobleSlot = 4; // Shows the available slot for a new noble.
let nobles = []; //Lists all the nobles and their props
let peasantsUnderNoble = []; //Lists all the peasants under the noble.
///////////////////////////////////////////////////////////////////////////////////
(function() {
    var members = 0; //pwasants the noble is assigned as levies and farmers.

    if (nobleSlot === 4) {
        becomeNoble();
    }

    //console.log(p.armour);
    //console.log((militaryRanks.rank[3].armor += p.armour));
    function becomeNoble() {
        /**
                                    @func becomeNoble()
                                    Answers the question who is noble
                                    Only 1 percent is of noble blood giving them the ability to rule
                                   The noble's subjects are the other 99% of iterations that didn't become noble                                                                                                                 */
        for (let i = 0; i < 1000; i++) {
            var percent = Math.round(Math.random() * 99 + 1);

            // percent of becoming noble
            if (percent == 100) {
                console.log("Noble");

                console.log("Peasants under the noble, " + members + " Levies");
                break;
            } else {
                ++members;
            }
        }
    }
})();

function randomN(x) {
    return Math.floor(Math.random() * x);
}

function compare(obj, obj2) {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`1- ${key} ${value}`);
    }
    for (const [key, value] of Object.entries(obj2)) {
        console.log(`2- ${key}: ${value}`);
    }
}

function simulateAttack(age, atk, risk) {
    //Makes the attack strength more dynamic by age affecting your attk
    //console.log("initial atk: " + atk);

    if (Number(age) > 39) {
        atk = atk / 2;

        //console.log(age);
        //console.log("Lost " + atk + " strength");
        //console.log("'Old Man In Affect:' total " + atk + " Strength");

        if (atk < 0) {
            risk = Math.abs(atk);
            atk = 0;
        }

        return atk;
    } else if (Number(age) > 12 && Number(age) < 39) {
        // maturing to adulthood. Developing muscules.
        var stronger = age * 2;

        //console.log(age);
        //console.log(atk);

        var strength = atk + stronger;
        //console.log(strength);
        //console.log("'Young Man In Affect:'" + stronger + " Strength");

        if (atk < 0) {
            risk = Math.abs(atk);
            return strength, (atk = 0);
        }

        return strength;
    } else {
        var a = atk - 10;
        atk = a;
        //console.log("'Is only a Child In Affect:' " + atk);
    }
    //console.log("Final atk:" + atk);
    return atk;
}

function simulateHp(age, hp, risk) {
    //Calculates Risk of catching diseases based on age and life chosen path
    risk = 0;

    if (Number(age) > 39) {
        risk += 5;
    }

    if (age > 50 || (age > 40 && "Alcoholic")) {
        return (risk += 15);
    }

    for (const i in sickness) {
        if (sickness.hasOwnProperty(i)) {
            const element = sickness[i];
            //console.log(element);
        }
    }
    var keyNames = Object.keys(sickness);
    //console.log(keyNames);
}
// making random people attributes

export var people = {
    //compare(p1, p2);
    count: 0,
    person: [],
};

export var food = {
    count: 0,
    food: [],
};

//makes people appear
export function maker(n) {
    var displayElement = $("#population");
    $(displayElement).addClass("text-success");
    while (n > 0) {
        ++people.count;
        people.person.push(new Character(n));

        n--;
    }

    displayElement.html("<h1>" + people.count + "</h1>");

    return people.count;
}

//console.log(maker(10));

(function() {
    //army viewer

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
})();

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
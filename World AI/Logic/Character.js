// Characters are people with skills and attributes with names and habits.

// module of names

import { names, rawSurnames, sickness } from './DataBase.js';
import { getRandom } from './Util.js';
import { time, age } from './Time.js';

/*import {alive, lifeStage, time} from './Time.js';
 */
var id = 0; // the id of each object of the Character class
var nationality = [];
var surnames = [];
var it = 0; // separate iterator for NAMES
var snit = 0; // same iterator for SURNAMES and NATIONALITY



export class Character {
    constructor() {
        var snit = getRandom(0, 18);
        this.name =
            names[getRandom(0, 15)] + surnames[snit];
        this.nationality = nationality[snit] + " descendant";
        this.hp = 100;
        this.atk = getRandom(0, 100);
        this.atk = simulateAttack(this.age, this.atk);
        this.armour = 0;
        this.risk = 0;
        this.age = age;
        this.id = function() {
            return id++;
        }

    }
    info() {
        console.log("Name: " + this.name + "\n" + "Nationality: " + this.nationality + "\n" + "Health: " + this.hp + "\n" + "Strength: " + this.atk + "\n" + "Age: " + this.age + "\n");
    }
}












function randomN(x) {
    return Math.floor(Math.random() * x);
}

function iterateNameLists() {
    for (let i = 1; i < rawSurnames.length; i += 2) {
        nationality.push(rawSurnames[i]);
    }

    for (var j = 0; j < rawSurnames.length; j += 2) {
        surnames.push(rawSurnames[j])
    }
    //nationality and Surnames joined
    let ns = [];
    for (var i = 0; i < 18; i++) {
        ns = nationality[i] + "," + surnames[i]
        var str = ns.split(",")
        var n = str[str.length - 1];
    }
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
        atk = (atk / 2);

        //console.log(age);
        //console.log("Lost " + atk + " strength");
        //console.log("'Old Man In Affect:' total " + atk + " Strength");

        if (atk < 0) {
            risk = Math.abs(atk);
            return atk = 0;
        }


        return atk;

    } else if (Number(age) > 12 && Number(age) < 39) { // maturing to adulthood. Developing muscules.
        var stronger = (age * 2);

        //console.log(age);
        //console.log(atk);

        var strength = atk + stronger;
        //console.log(strength);
        //console.log("'Young Man In Affect:'" + stronger + " Strength");

        if (atk < 0) {
            risk = Math.abs(atk);
            return strength, atk = 0;
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

function simulateHp(age, hp, risk) { //Calculates Risk of catching diseases based on age and life chosen path
    risk = 0;

    if (Number(age) > 39) {
        risk += 5;

    }



    if (age > 50 || age > 40 && "Alcoholic") {
        return risk += 15;
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
    food: []
}

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


    return people;
}

//makes people disappear
export function loss(n) {

    var displayElement = $("#population");
    $(displayElement).removeClass("text-success");
    while (n > 0) {
        --people.count;
        people.person.pop(people.person[n]);
        n--;
    }

    displayElement.html("<h1 class='text-danger'>" + people.count + "</h1>");
    return people;
}




//console.log(maker(10));






iterateNameLists();
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
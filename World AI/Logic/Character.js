// Characters are people with skills and attributes with names and habits.

// module of names

import {
    names,
    fnames,
    sickness,
    militaryRanks,
    job,
    displayHTML,
    log,
} from "./DataBase.js";
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
export var people = {
    // contains all the people of the world
    //compare(p1, p2);
    count: 0,
    person: [],
};
/*

    We need Four kingdoms and therefore four kings.
    North, East, West, and South.


*/
export let deaths = 0;
    let male = 0;
    let female = 0;



        
export class Character {
    constructor() {
        let percent = Math.round(Math.random() * 99 + 1);
        //50% change of it being a boy for a girl.
        this.id = id += 1;
        this.title = `${job[0].name}`;
        this.alive = true;
        if (percent <= 60) {
            // 60 to be A man
            this.name = names[getRandom(0, 400)];
            this.gender = "male";
            this.hp = 100;
            this.atk = getRandom(0, 100);
            this.armour = 0;
             this.age = 0
            this.risk = 0;
            ++male;
            $('#male-count').text(male);

        } else {
            this.name = fnames[getRandom(0, 400)];
            this.gender = "female";
            this.hp = 100;
            this.atk = getRandom(0, 60);
            this.armour = 0;
            this.age = 0;
            this.risk = 0;
            
            ++female;
            $('#female-count').text(female)
        };
            bio(
            this.gender,
            this.title,
            this.name,
            this.armour,
            this.atk,
            this.age,
            this.id
            );

     let person = document.getElementById(`person_${this.id}`);
/*     person.addEventListener("click", deathClick, false);  */

    let live = console.log(Math.floor(Math.random() * 5000) + 1000);
/* console.log('people', people.count); */
     setTimeout(()=>{deathFunction(person), 5000}); 
    }
}

function deathFunction(id) {
    if(people.count > 0){
        id.classList[id.classList.length - 1] === 'male' ? $('#male-count').text(--male) : $('#female-count').text(--female);
        id.remove(); 
        people.count--;
        displayHTML(people.count, "#population", "h5");
        displayHTML(++deaths, "#deaths", "h5");
    }
};

function deathClick(e) {
     e = e || window.event; 
    e.currentTarget.classList[0] === 'male' ? $('#male-count').text(--male) : $('#female-count').text(--female);
    e.currentTarget.remove(); 

   
    people.count--;
    displayHTML(people.count, "#population", "h5");
    displayHTML(++deaths, "#deaths", "h5");
};



const sum = (a, b)=>{
return a + b;
}
const arrayAdd = (data)=>{
    return [].push(data);

}


export function bio(gender, title, name, armour, atk, age, id) {
    //age = setInterval(() => $(`#male-age${id}`).text(console.log(++age)) , 1000);
    
    let person_icon =`
    <div id="person_${id}" class='${gender}'>
        <div id='male-age_${id}'>${age}</div>
        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path  d="M9.53524 21V14.5H9.02349C8.46057 14.5 8 14.05 8 13.5V9C8 7.9 8.92114 7 10.047 7H13.1175C14.2433 7 15.1644 7.9 15.1644 9V13.5C15.1644 14.05 14.7039 14.5 14.1409 14.5H13.6292V21C13.6292 21.55 13.1686 22 12.6057 22H10.5587C9.99581 22 9.53524 21.55 9.53524 21ZM11.5822 6C12.7183 6 13.6292 5.11 13.6292 4C13.6292 2.89 12.7183 2 11.5822 2C10.4461 2 9.53524 2.89 9.53524 4C9.53524 5.11 10.4461 6 11.5822 6Z" fill="#007bff"/>
        </svg>
        <div >
    </div>
    `;
    //var person_ID = document.getElementById(`person_${id}`);
    //console.log((person_ID.innerText = ""));
        let f_person_icon =`
    <div id="person_${id}" class='female'>
    <div id='female-age_${id}'>${age}</div>
        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path  d="M13.7458 21V16H15.3936C16.0896 16 16.5809 15.33 16.3659 14.68L14.2166 8.37C13.93 7.55 13.1522 7 12.272 7H12.1492C11.269 7 10.4809 7.55 10.2045 8.37L8.0552 14.68C7.83003 15.33 8.32131 16 9.02752 16H10.6753V21C10.6753 21.55 11.1359 22 11.6988 22H12.7223C13.2852 22 13.7458 21.55 13.7458 21ZM12.2106 6C13.3467 6 14.2576 5.11 14.2576 4C14.2576 2.89 13.3467 2 12.2106 2C11.0745 2 10.1636 2.89 10.1636 4C10.1636 5.11 11.0745 6 12.2106 6Z" fill="rgb(255, 99, 132)"/>
        </svg>
    </div>
    `;

 


    if (gender == "female") {
        person_icon = f_person_icon;
    }
    

    let t = `<div class="col text-center">${title}</div>`;
    let na = `<div class="col ">${name}</div>`;
    let ar = ` <div class="col ">Armour ${armour}</div>`;
    let at = `<div class="col ">Strength ${atk}</div>`;
    let ag = `<div class="col ">Age ${age}</div>`;
    let ids = `<div class="col ">Identity ${id}</div> `;
   
    //console.log(ag);
    if (armour === 0) {
        ar = "";
    }

    $("people").append(`${person_icon}`); //Creates the icon figure of a person to the screen

    function displayAttr() {
        $("people").append(`<person class="d-flex m-2 text-center">
    ${t}
    ${ar}
    ${at}
    ${ag}
    ${ids}
    ${gen}
</person>`);
    }
}



let onePersonAge = document.querySelector('#person_1');
if(onePersonAge !== null){
    log(onePersonAge)    
}





let nobles = []; //Lists all the nobles and their props
let peasantsUnderNoble = []; //Lists all the peasants under the noble.
///////////////////////////////////////////////////////////////////////////////////
function befriend(person, person1) {
    person.friend = person1;
    person1.friend = person;
    if (person.friend.gender == "female") {
        person.friend.gender = "Female";
    }
    if (person1.friend.gender == "female") {
        person1.friend.gender = "Female";
    }
    if (person.friend.gender == "male") {
        person.friend.gender = "Male";
    }
    if (person1.friend.gender == "male") {
        person1.friend.gender = "Male";
    }

    console.log(
        person.name +
        ", friends with " +
        person.friend.name +
        " is " +
        person.friend.gender
    );
    console.log(
        person1.name +
        ", friends with " +
        person1.friend.name +
        " is " +
        person1.friend.gender
    );

    if (person.friend.gender != person1.friend.gender) {
        console.log("Married");
    }
}

//var c = new Character();
//var c2 = new Character();
//befriend(c, c2);

let members = 0; //peasants the noble is assigned as levies and farmers.
//becomeNoble();
function becomeNoble() {
    let theNoble = {};

    for (let i = 0; i < 100; i++) {
        var percent = Math.round(Math.random() * 99 + 1);

        // percent of becoming noble
        if (percent === 100) {
            theNoble = new Character();
            people.person.push(theNoble);
            console.log(
                "Peasants under the noble " + theNoble.name + " " + members + " Levies"
            );
            break;
        } else {
            //var peasants = people.person.push(new Character());

            ++members;
        }
    }

    nobles.push(theNoble);
    //console.log(theNoble);
    nobles.forEach((_element, i) => {
        nobles[i].title = "Noble";
    });

    //console.log(people);
}
//console.log(p.armour);
//console.log((militaryRanks.rank[3].armor += p.armour));

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

export var food = {
    count: 0,
    food: [],
};

//makes people appear

function displayPopulationCount() {
    let displayElement = $("#population");
    displayElement.html("<h5>" + people.count + "</h5>");
}



export function maker(n) {
    

    while (n > 0) {
        ++people.count;
        people.person.push(new Character(n));
        //console.log(people.person);

        n--;
    }

    displayPopulationCount();
    return people.count;
}




//console.log(maker(10));
  //army viewer

/* (function() {
  
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
})(); */

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
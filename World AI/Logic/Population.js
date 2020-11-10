/**

 * 
 Net reproductive rate (r) is calculated as: r = (births-deaths)/population size 
 *
 */

function random(num) {
    var random = Number(Math.round(Math.random() * num) + 1);
    return random;
}

let r,
    births,
    deaths,
    population = 0;

/* 
var rate = function(births, deaths, population) {
    return r = (births - deaths) / population;
} */

var pop = 0;
var age = 0;

//30* years is roughly one generation
var firstPeople = 30; //First generation
if (firstPeople == 30) {
    age = random(40);
}

/*
 Character 
 constructor(name, hp, atk, age, honor)
*/

//relative to the person object

/**
 * 
    To replace with the Character class
 */
var john = "John";
var mary = "Mary";
var son = "James";

export function marriage(male, female) {
    //family unit
    const family = {
        parent: [],
        child: [], //stores the family's children
    };

    //function that adds another family member
    function haveChild(mother) {
        /**
                                                                                   *@param mother 
                                                                                      the one giving birth to child.
                                                                                   */
        //One in three women died in pregnancies //Medieval setting
        let fertileTime = setInterval(() => {
            var risk = Math.round(Math.random() * 2);
            // the outcome is determined by random chance out of 3
            //console.log(family);
            return risk == 1 ? clearInterval(fertileTime) : family.child.push(son);
        }, 1000);

        return family;
    }

    //assume 18 is the year of adulthood
    family.parent.push([male, female]);
    if (family.parent.length === 1) {
        haveChild(female);
    }
    if (male.age >= 18 && female.age >= 18 && male.age <= 50 && female <= 38) {
        family.parent.push([male, female]);
    }
    //console.log(family);
}

setInterval(marriage(john, mary), 100);

/**
  Population growth rate is the percentage change in the size of the population in a year.
  
  It is calculated by dividing the number of people
  
  added to a population in a year
  
  (Natural Increase + Net In-Migration)
  
  by the population size at the start of the year.
 */
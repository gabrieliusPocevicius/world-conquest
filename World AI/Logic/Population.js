/**

 * 
 Net reproductive rate (r) is calculated as: r = (births-deaths)/population size 
 *
 */

function random(num) {
    var random = Number(Math.round(Math.random() * num) + 1);
    return random;
}

let r, births, deaths, population = 0;


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
    console.log(age);
}



/*
 Character 
 constructor(name, hp, atk, age, honor)
*/

//relative to the person object






/**
  Population growth rate is the percentage change in the size of the population in a year.
  
  It is calculated by dividing the number of people
  
  added to a population in a year
  
  (Natural Increase + Net In-Migration)
  
  by the population size at the start of the year.
 */
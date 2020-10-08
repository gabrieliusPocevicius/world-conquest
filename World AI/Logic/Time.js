"use strict"
import { battleTrue } from '../Logic/Battle.js';
import { monthNames } from "./DataBase.js";



if (battleTrue == true) {
    time(1000); //slows the time down so the men don't age so fast 
} else {
    time(10); //time goes on as normal
}

export let age = 0;



export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandom(min, max) {
    console.log(Math.floor(Math.random() * (max - min)) + min);
};



// year 500 and first month and days
var calender = {
    years: 500,
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    days: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    dayC: 1,
    monthC: 1,
    yearC: 500,
}




function alive(day, month, year) {
    let alive = true;
    var yearsOld = 0;
    //parameters birthday
    if (calender.dayC === day && calender.monthC === month && alive) {
        // person's age
        let age = yearsOld + calender.yearC - year;
        lifeStage(age);
        return console.log(age + " years old");
    }
}

function lifeStage(age) {
    // everything comes with age
    if (age < 2) {
        let baby = "Baby Stage"
            //console.log(baby);
    }
    if (age <= 12 && age >= 2) {
        let child = "Child Stage ";
        //console.log(child);
    }

    if (age <= 18 && age > 12) {
        let teen = "Teen Stage  ";
        //console.log(teen);
    }
    if (age > 18 && age < 60) {
        let adult = "Adult Stage ";
        //console.log(adult);
    }
    if (age >= 60) {
        let old = "Elder Stage "
        console.log(old);

    }
    if (age == 110) {
        console.log("dead");
    }
}

function timeStruct() {
    if (calender.dayC === calender.days[calender.monthC]) {
        calender.dayC = 1;

        var mn = monthNames;
        // console.log( String(mn[calender.monthC]))
        calender.monthC++;







        if (calender.monthC === 12) {


            //  console.log(String(monthNames[11]))
            calender.monthC = 1;
            calender.yearC++;

            // console.log('year ' + calender.yearC)
        }
    }
}


async function time(speed) {
    // Time loop 

    while (true) {
        await sleep(speed); //wating time for a single day

        calender.dayC++;


        //console.log(alive(20, 1, 500));






        document.getElementById('days').innerHTML = calender.dayC + ' days';


        document.getElementById('months').innerHTML = monthNames[calender.monthC];

        document.getElementById('years').innerHTML = calender.yearC;
        age = calender.yearC - calender.years;

        //console.log(age);
        //console.warn(age);


        timeStruct();


    }

}
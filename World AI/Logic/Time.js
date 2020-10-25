import { battleTrue } from '../Logic/Battle.js';
import { monthNames } from "./DataBase.js";

import { Character, maker, people } from './Character.js';


export var age = 0;

(function() {
    $("#pause").on("click", () => {
        $("#pause").text("Pause");
        ++counter;

        if (counter == 1) {
            if (battleTrue == true) {
                time(1000); //slows the time down so the men don't age so fast 
            } else {
                time(300); //time goes on as normal
            }

        }

    });

}());
//Util func
let counter = 0; // Counter variable is used as a switch.







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


//var result = Math.round(result * 100) / 100; 
//when nature strikes
function naturalDisaster(affects, lengthOfTime) {

    var triggers = false;

    //0.6 die from disease
    //1 out of 100 ppl die from natural disasters.
    //Life expectancy: 80 years
    //affects  = how many people it affects from total
    //lengthOfTime = how long it lasts FROM: TO dates.
    //https://www.cdc.gov/nchs/fastats/deaths.htm
    lengthOfTime = 1;
    affects = 0.02; //avarge damage by natural disasters per year

    if (0 == calender.yearC % lengthOfTime) { //every so many years

    }

    /*
    Geophysical (e.g. Earthquakes, Landslides, Tsunamis and Volcanic Activity)
    Hydrological (e.g. Avalanches and Floods)
    Climatological (e.g. Extreme Temperatures, Drought and Wildfires)
    Meteorological (e.g. Cyclones and Storms/Wave Surges)
    Biological (e.g. Disease Epidemics and Insect/Animal Plagues) 
     */

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

export function timeStruct() {
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

        zingchart.render({
            id: 'myChart',
            data: {
                type: 'radar',
                series: [
                    { values: [maker(2)] }

                ],
                'scale-y': {
                    values: "0:50:5"
                },
                'scale-x': {
                    values: "Population"
                }

            }
        });



        //Adds one person per day



        document.getElementById('days').innerHTML = calender.dayC + ' days';
        document.getElementById('months').innerHTML = monthNames[calender.monthC];
        document.getElementById('years').innerHTML = calender.yearC;
        age = calender.yearC - calender.years;

        //console.log(age);
        //console.warn(age);


        timeStruct();

        if (counter == 2) {
            $("#pause").text("Start");
            counter = 0;
            break;
        }
    }

}
export { time };
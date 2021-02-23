import { battleTrue } from "../Logic/Battle.js";
import { monthNames } from "./DataBase.js";
import { Character, maker, people } from "./Character.js";

export let age = 0;

let playIcon = `
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 19.875L19.3375 15.5C19.675 15.25 19.675 14.75 19.3375 14.5L13.5 10.125C13.0875 9.8125 12.5 10.1125 12.5 10.625V19.375C12.5 19.8875 13.0875 20.1875 13.5 19.875ZM15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM15 25C9.4875 25 5 20.5125 5 15C5 9.4875 9.4875 5 15 5C20.5125 5 25 9.4875 25 15C25 20.5125 20.5125 25 15 25Z" fill="#FAFAFA"/>
            </svg>
`;


let speed = 100;
let pausedSpeed = 1000;
(function() {
    $("#pause").on("click", () => {
        $("#pause")
            .html(`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M14.5 20C15.1875 20 15.75 19.4375 15.75 18.75V11.25C15.75 10.5625 15.1875 10 14.5 10C13.8125 10 13.25 10.5625 13.25 11.25V18.75C13.25 19.4375 13.8125 20 14.5 20ZM17 2.5C10.1 2.5 4.5 8.1 4.5 15C4.5 21.9 10.1 27.5 17 27.5C23.9 27.5 29.5 21.9 29.5 15C29.5 8.1 23.9 2.5 17 2.5ZM17 25C11.4875 25 7 20.5125 7 15C7 9.4875 11.4875 5 17 5C22.5125 5 27 9.4875 27 15C27 20.5125 22.5125 25 17 25ZM19.5 20C20.1875 20 20.75 19.4375 20.75 18.75V11.25C20.75 10.5625 20.1875 10 19.5 10C18.8125 10 18.25 10.5625 18.25 11.25V18.75C18.25 19.4375 18.8125 20 19.5 20Z" fill="#FAFAFA"/>
</g>
<defs>
<filter id="filter0_d" x="-2" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
`);
        ++counter;
        play = true;
        if (counter == 1) {
            if (battleTrue == true) {
                time(pausedSpeed); //slows the time down so the people don't age so fast
            } else {
                time(speed); //time goes on as normal
            }
        }
    });
})();
//Util func
let counter = 0; // Counter variable is used as a switch.

export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandom(min, max) {
    console.log(Math.floor(Math.random() * (max - min)) + min);
}

// year 500 and first month and days
var calender = {
    years: 500,
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    days: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    dayC: 1,
    monthC: 1,
    yearC: 500,
};




/*     calender.months.forEach((_, index) => {
    let monthindex = index;
    console.log('Month', monthindex, 'days: ',calender.days[index]);
    });
 */

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
    if (0 == calender.yearC % lengthOfTime) {
        //every so many years
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
        age = yearsOld + calender.yearC - year;
        lifeStage(age);
        return console.log(age + " years old");
    }
}

function lifeStage(age) {
    var stage = "";
    // everything comes with age
    if (age < 2) {
        let baby = "Baby Stage";
        stage = baby;
        return stage;
        //console.log(baby);
    }
    if (age < 12 && age >= 2) {
        let child = "Child Stage ";
        stage = stage;
        return stage;
        //console.log(child);
    }
    if (age <= 18 && age >= 12) {
        let teen = "Teen Stage  ";
        stage = teen;
        return stage;
        //console.log(teen);
    }
    if (age > 18 && age < 60) {
        let adult = "Adult Stage ";
        stage = adult;
        return stage;
        //console.log(adult);
    }
    if (age >= 60) {
        let old = "Elder Stage ";
        stage = old;
        return stage;
    }
    if (age == 120) {
        let dead = "Dead";
        stage = age;
        console.log("dead");
        return stage;
    }
}

export function timeStruct() {
    /**
    @func timeStruct()
    lays out the structure of the calender
 */
    //if the current day is equal to the month day then current day plus 1
    if (calender.dayC === calender.days[calender.monthC]) {
        calender.dayC = 1;
         //let mn = monthNames;
         //console.log( String(mn[calender.monthC]))
        calender.monthC++;
        if (calender.monthC === 12) {
            //  console.log(String(monthNames[11]))
            calender.monthC = 1;
            calender.yearC++;
             //console.log('year ' + calender.yearC)
        };
    };
};


function displayDate(){
    calender.dayC++;
    document.getElementById("days").innerHTML = "day " + calender.dayC;
    document.getElementById("months").innerHTML = monthNames[calender.monthC];
    document.getElementById("years").innerHTML = calender.yearC;
    age = calender.yearC - calender.years;
};

let play = true;
async function time(speed) {
    // Time loop
    while (play) {
        await sleep(speed); //wating time for a single day
        displayDate();
        //console.log(alive(20, 1, 500));
        //Adds one person per day
        //console.log(age);
        //console.warn(age);
        timeStruct();
        maker(1);
        pauseTime();
    }
}

function pauseTime() {
    let paused = (counter === 2);
    if (paused) {
        counter = 0;
        play = false;
        $("#pause").html(playIcon);
    }
}

export { time };
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
import { calender, play } from "./Time.js";
import { getRandom } from "./Util.js";




let id = 0; // the id of each object of the Character class
let nationality = [];
let surnames = [];


let percent = Math.round(Math.random() * 99 + 1);
export let people = {
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
let getAttributes = {};
let timeGoes = false;
const displayUserInfo = document.getElementById("information-display");
displayUserInfo.style.opacity = "0";


// removes the time from the people's age
/*  let timePaused = 0; 

        const start = Date.now();
        setInterval(() => {
            
            const millis = Date.now() - start;
            timePaused =  Math.floor(millis / 1000);
            
 }, 1000);  */
  // expected output: seconds elapsed = 2
     

export class Character {
  
  constructor(agePassed, gender) {
    
    let birthYear = 
      setTimeout(()=>{
        return calender.yearC;
      },0);
    birthYear -= 4;
    
    
    let age = 0 + agePassed;

    

    //time going by 
    //  
   setInterval(() => {

        if(play){
         let time = (calender.yearC  - calender.years) - birthYear;
         let storeTime = 0;
         console.log('Time ',time)
          storeTime = time + agePassed;
          age = storeTime;
          return age; 
        }
         
  }, 2000); 
    
  


    let skill = 0;
    function qaulities(){
      let work = getRandom(0, 100);
      if(work > 1){
        skill++;
        qaulities();
      };
      /* console.log('skills ', skill); */
    };




    let percent = 0;
    if(!gender){
      percent = Math.floor(Math.random() * 99 + 1);
    }else{
      percent = gender;
    };
    //50% change of it being a boy for a girl.
    /* let dna = getRandom(0,1000);*/
    this.id = id += 1;
    /* let random = getRandom(0,6); */
    /* this.title = `${job[random].name}`; */
    /* console.log(this.title); */
    if(percent <= 50){
      ++male;
      $("#male-count").text(male);
      let man = {
        id: this.id,
        name: names[getRandom(0, 400)],
        gender:"male",
        age: age,
        hp:100,
        atk:getRandom(0, 100),
        armour:0,
        wealth:0,
      }

    

       function wallet(){
        console.log(man.name, 'has', man.wealth);
        } 
        
        displayPerson(man.gender, man.id);
        
         getAttributes = man; 
        let person = document.getElementById(`person_${man.id}`);
        person.addEventListener("click", (e) => {
          e.preventDefault();
          console.log("hello", man.name);
        });

         person.addEventListener("mouseover", (e) => {
          /* e.stopPropagation(); */
          e.preventDefault();  
          man.age = age;
          
          displayUserInfo.style.opacity = "1";
          const keys = Object.keys(man);
          const props = Object.values(man);

          for (let i = 0; i < keys.length; i++) {
            document.getElementById(keys[i]).innerHTML = props[i];
          }
        });

      qaulities();
    }else{
        ++female;
        $("#female-count").text(female);
        let woman = {    
          id: this.id,
          name: fnames[getRandom(0, 400)],
          gender:"female",
          hp:100,
          age: 0 + agePassed,
          atk: getRandom(0, 60),
          armour: 0,
          wealth:0
        };
        function wallet(){
        console.log(woman.name, 'has', woman.wealth)
        }
       
        displayPerson(woman.gender, woman.id);

        getAttributes = woman;    
        let person = document.getElementById(`person_${woman.id}`);

        person.addEventListener("click", (e) => {
         /*  e.stopPropagation(); */
          e.preventDefault();
          console.log("hello", woman.name);
        });    

        person.addEventListener("mouseover", (e) => {
          /* e.stopPropagation(); */
          e.preventDefault();
          woman.age = age;
          displayUserInfo.style.opacity = "1";
          const keys = Object.keys(woman);
          const props = Object.values(woman);
          for (let i = 0; i < keys.length; i++) {
            document.getElementById(`${keys[i]}`).innerHTML = props[i];
          };
        });
    
      qaulities();
      
    }
  }
}












function deathFunction(id) {
  if (people.count > 0) {
    id.classList[id.classList.length - 1] === "male"
      ? $("#male-count").text(--male)
      : $("#female-count").text(--female);
    id.remove();
    people.count--;
    displayHTML(people.count, "#population", "h5");
    displayHTML(++deaths, "#deaths", "h5");
  }
}
function deathClick(e) {
  e = e || window.event;
  e.currentTarget.classList[0] === "male"
    ? $("#male-count").text(--male)
    : $("#female-count").text(--female);
  e.currentTarget.remove();
  people.count--;
  displayHTML(people.count, "#population", "h5");
  displayHTML(++deaths, "#deaths", "h5");
}
export function displayPerson(gender, id) {

  let color = [52, 58, 64, 1];

  let person_icon = `
    <div id="person_${id}" class='d-block ${gender}'>
       <div class="rounded p-1 m-1" style='background-color:rgba(${color[0]},${color[1]},${color[2]},${color[3]});'>
            <svg  width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path  d="M9.53524 21V14.5H9.02349C8.46057 14.5 8 14.05 8 13.5V9C8 7.9 8.92114 7 10.047 7H13.1175C14.2433 7 15.1644 7.9 15.1644 9V13.5C15.1644 14.05 14.7039 14.5 14.1409 14.5H13.6292V21C13.6292 21.55 13.1686 22 12.6057 22H10.5587C9.99581 22 9.53524 21.55 9.53524 21ZM11.5822 6C12.7183 6 13.6292 5.11 13.6292 4C13.6292 2.89 12.7183 2 11.5822 2C10.4461 2 9.53524 2.89 9.53524 4C9.53524 5.11 10.4461 6 11.5822 6Z" fill="#007bff"/>
            </svg>
        <div>
    </div>
    `;

  let f_person_icon = `
    <div id="person_${id}" class='d-block female'>
        <div class="rounded p-1 m-1" style='background-color:rgba(${color[0]},${color[1]},${color[2]},${color[3]});'>
            <svg  width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path  d="M13.7458 21V16H15.3936C16.0896 16 16.5809 15.33 16.3659 14.68L14.2166 8.37C13.93 7.55 13.1522 7 12.272 7H12.1492C11.269 7 10.4809 7.55 10.2045 8.37L8.0552 14.68C7.83003 15.33 8.32131 16 9.02752 16H10.6753V21C10.6753 21.55 11.1359 22 11.6988 22H12.7223C13.2852 22 13.7458 21.55 13.7458 21ZM12.2106 6C13.3467 6 14.2576 5.11 14.2576 4C14.2576 2.89 13.3467 2 12.2106 2C11.0745 2 10.1636 2.89 10.1636 4C10.1636 5.11 11.0745 6 12.2106 6Z" fill="rgb(255, 99, 132)"/>
            </svg>
        </div>       
    </div>
    `;

  if (gender == "female") {
    person_icon = f_person_icon;
  }

  $("people").append(`${person_icon}`); //Creates the icon figure of a person to the screen
}
function moveablePeople() {
      $( "#people" ).sortable({
            revert: true
        });
    $( "#people" ).disableSelection();
};
moveablePeople();




let nobles = []; //Lists all the nobles and their props
let peasantsUnderNoble = []; //Lists all the peasants under the noble.
///////////////////////////////////////////////////////////////////////////////////
let skills = [];

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




function displayPopulationCount() {
  let displayElement = $("#population");
  displayElement.html("<h5>" + people.count + "</h5>");
}

function spawn() {
  ++people.count;
  people.person.push(new Character());
  displayPopulationCount()
  return people.count;
}

function createPerson(age, gender) {
    ++people.count;
  people.person.push(new Character(age, gender));
  displayPopulationCount();
  return people.count;
}



let adam = createPerson(40,10);
let eve = createPerson(30,60); 


/* 
for(let i = 0;i<10;i++){
  console.log(people.person[i]);
};
 */

function reproduction(age){
    if(age > 17 && age < 37){
      console.log('called');
      let chance = Math.round(Math.random() * 99 + 1);
      if(chance <= 25){
        spawn();
      }
    }
}
  

//makes people appear

let pairs = [];
export function maker(n) {
for(let i = 1; i < people.count;i++){
  let x = $(`#person_${i}`).attr('id');

   /* if($('#people').children().length % 2 === 0){
      
      $(`#${x}`).remove();
  };  */
  
}
//spawns peeps
  while (n > 0) {
    spawn();
    n--;
  };
};






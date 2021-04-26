"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayHTML = displayHTML;
exports.log = log;
exports.titles = exports.fnames = exports.names = exports.monthNames = exports.sickness = exports.job = exports.militaryRanks = exports.guardCaptain = exports.vassal = exports.trainer = exports.treasuror = exports.drillMaster = exports.knight = exports.squire = exports.crossBowMan = exports.footSoldier = exports.farmer = void 0;

/////////////Shorthand Function/////////////////

/**
 * Short Cut for displaying html
 * @param
 */
function displayHTML(value) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "div";
  return $("".concat(parent)).html("<" + tag + ">" + value + "</" + tag + ">");
}
/**
 * Short Cut for console.log()
 * @param
 */


function log(value) {
  console.log(value);
}
/**
 *Creates a cookie
 * @param  name
 * @param  value
 * @param  days
 */


function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  }
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == " ") {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
} //JOBS ///////////////////////////////////////


var farmer = {
  name: "Farmer",
  wage: 1,
  description: "A person who owns or manages a farm."
};
exports.farmer = farmer;
var footSoldier = {
  name: "Foot Soldier",
  wage: 2,
  description: "A soldier who fights on foot."
};
exports.footSoldier = footSoldier;
var crossBowMan = {
  name: "Arbalist",
  wage: 3,
  description: "A soldier who shoots a crossbow"
};
exports.crossBowMan = crossBowMan;
var squire = {
  name: "Squire",
  wage: 4,
  description: "A young nobleman acting as an attendant to a knight before becoming a knight himself."
};
exports.squire = squire;
var knight = {
  name: "Knight",
  wage: 12,
  description: "A knight is a person granted an honorary title of knighthood by a head of state or representative for service to the monarch"
};
exports.knight = knight;
var drillMaster = {
  name: "Drill Master",
  wage: 34,
  description: "A noble in charge of training."
};
exports.drillMaster = drillMaster;
var treasuror = {
  name: "Treasuror",
  wage: 100,
  description: "A treasurer is the person responsible for running the treasury of an Army. The significant core functions of a treasurer include cash and liquidity management, risk management, and corporate finance."
};
exports.treasuror = treasuror;
var trainer = {
  name: "Trainer",
  wage: 5,
  description: "A master of fighting tasked with training the troops."
};
exports.trainer = trainer;
var vassal = {
  name: "Vassal",
  wage: 60,
  description: "A holder of land by feudal tenure on conditions of homage and allegiance."
};
exports.vassal = vassal;
var guardCaptain = {
  name: "",
  wage: 60,
  description: "A holder of land by feudal tenure on conditions of homage and allegiance."
};
exports.guardCaptain = guardCaptain;
var militaryRanks = {
  rank: [{
    rank: "Levy",
    atk: 5,
    armor: 5,
    wage: 0.01
  }, {
    rank: "Men-At-Arms",
    atk: 10,
    armor: 10,
    wage: 0.05
  }, {
    rank: "Sergeant",
    atk: 24,
    armor: 15,
    wage: 0.3,
    commands: 5
  }, {
    rank: "Corporal",
    atk: 15,
    armor: 30,
    wage: 1,
    commands: 7
  }, {
    rank: "Knight",
    atk: 32,
    armor: 60,
    wage: 5,
    commands: 65
  }, {
    rank: "Knight Lieutenant",
    atk: 42,
    armor: 100,
    wage: 8,
    commands: 100
  }, {
    rank: "Knight Captain",
    atk: 50,
    armor: 120,
    wage: 14,
    commands: 120
  }, {
    rank: "Knight Commander",
    atk: 65,
    armor: 180,
    wage: 25,
    commands: 150
  }, {
    rank: "Lord Commander",
    atk: 80,
    armor: 200,
    wage: 35,
    commands: 1000
  }, {
    rank: "Lord Marshal",
    atk: 120,
    armor: 250,
    wage: 50,
    commands: Infinity
  }, {
    rank: "Lord High Marshal",
    atk: 150,
    armor: 300,
    wage: 60,
    commands: Infinity
  }, {
    rank: "Lord Sovereign Marshal",
    atk: 300,
    armor: 350,
    wage: 100,
    commands: Infinity
  }]
};
exports.militaryRanks = militaryRanks;
var job = [farmer, footSoldier, crossBowMan, squire, knight, drillMaster, treasuror]; //18 surnames

exports.job = job;
var sickness = {
  Allergies: -10,
  Conjunctivitis: -5,
  Diarrhea: -5,
  Headaches: -5,
  Mononucleosis: -10,
  "Stomach Aches": -5,
  Cancer: [-50, {
    Lung: 15.5
  }, {
    Prostate: 14.5
  }, {
    Colorectal: 11.4
  }, {
    Stomach: 7.8
  }, {
    Liver: 6.8
  }, {
    Bladder: 4.8
  }, {
    Oesophagus: 4.5
  }, {
    "Non-Hodgkin lymphoma": 3.2
  } //8
  ],
  "Celiac Disease": -10,
  "Heart Disease": -50,
  "Infectious Diseases": [-25, "Chickenpox", "Common cold", "Diphtheria", "E. coli", "Giardiasis", "HIV/AIDS", "Infectious mononucleosis", "Influenza"],
  "Liver Disease": -50
};
exports.sickness = sickness;
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
exports.monthNames = monthNames;
var names = ["Noah", "Olive", "Willi", "Elija", "James", "Benja", "Lucas", "Mason", "Ethan", "Alexa", "Henry", "Jacob", "Micha", "Danie", "Logan", "Jacks", "Sebas", "Jack", "Aiden", "Owen", "Samue", "Matth", "Josep", "Levi", "Mateo", "David", "John", "Wyatt", "Carte", "Julia", "Luke", "Grays", "Isaac", "Jayde", "Theod", "Gabri", "Antho", "Dylan", "Leo", "Linco", "Jaxon", "Asher", "Chris", "Josia", "Andre", "Thoma", "Joshu", "Ezra", "Hudso", "Charl", "Caleb", "Isaia", "Ryan", "Natha", "Adria", "Chris", "Maver", "Colto", "Elias", "Aaron", "Eli", "Lando", "Jonat", "Nolan", "Hunte", "Camer", "Conno", "Santi", "Jerem", "Ezeki", "Angel", "Roman", "Easto", "Miles", "Rober", "James", "Nicho", "Greys", "Coope", "Ian", "Carso", "Axel", "Jaxso", "Domin", "Leona", "Luca", "Austi", "Jorda", "Adam", "Xavie", "Jose", "Jace", "Evere", "Decla", "Evan", "Kayde", "Parke", "Wesle", "Kai", "Brayd", "Bryso", "Westo", "Jason", "Emmet", "Sawye", "Silas", "Benne", "Brook", "Micah", "Damia", "Harri", "Waylo", "Ayden", "Vince", "Ryder", "Kings", "Rowan", "Georg", "Luis", "Chase", "Cole", "Natha", "Zacha", "Ashto", "Braxt", "Gavin", "Tyler", "Diego", "Bentl", "Amir", "Beau", "Gael", "Carlo", "Ryker", "Jaspe", "Max", "Juan", "Ivan", "Brand", "Jonah", "Giova", "Kaide", "Myles", "Calvi", "Loren", "Maxwe", "Jayce", "Kevin", "Legen", "Trist", "Jesus", "Jude", "Zion", "Justi", "Maddo", "Abel", "King", "Camde", "Ellio", "Malac", "Milo", "Emman", "Karte", "Rhett", "Alex", "Augus", "River", "Xande", "Anton", "Brody", "Finn", "Ellio", "Dean", "Emili", "Eric", "Migue", "Arthu", "Matte", "Graha", "Alan", "Nicol", "Blake", "Thiag", "Adrie", "Victo", "Joel", "Timot", "Hayde", "Judah", "Abrah", "Edwar", "Messi", "Zayde", "Theo", "Tucke", "Grant", "Richa", "Aleja", "Steve", "Jesse", "Dawso", "Bryce", "Avery", "Oscar", "Patri", "Arche", "Barre", "Leon", "Colt", "Charl", "Peter", "Kaleb", "Lukas", "Becke", "Jerem", "Prest", "Enzo", "Luka", "Andre", "Marcu", "Felix", "Mark", "Ace", "Brant", "Atlas", "Remin", "Maxim", "Matia", "Walke", "Kyrie", "Griff", "Kenne", "Israe", "Javie", "Kyler", "Jax", "Amari", "Zane", "Emili", "Knox", "Adoni", "Aidan", "Kaden", "Paul", "Omar", "Brian", "Louis", "Caden", "Maxim", "Holde", "Paxto", "Nash", "Bradl", "Bryan", "Simon", "Phoen", "Lane", "Josue", "Colin", "Rafae", "Kyle", "Riley", "Jorge", "Beckh", "Cayde", "Jaden", "Emers", "Ronan", "Karso", "Arlo", "Tobia", "Brady", "Clayt", "Franc", "Zande", "Erick", "Walte", "Daxto", "Cash", "Marti", "Damie", "Dalla", "Cody", "Chanc", "Jense", "Finle", "Jett", "Corbi", "Kash", "Reid", "Kamer", "Andre", "Gunne", "Jake", "Hayes", "Manue", "Princ", "Bodhi", "Cohen", "Sean", "Khali", "Hendr", "Derek", "Crist", "Cruz", "Kairo", "Dante", "Attic", "Killi", "Steph", "Orion", "Malak", "Ali", "Eduar", "Ferna", "Ander", "Angel", "Spenc", "Gideo", "Mario", "Titus", "Travi", "Rylan", "Kayso", "Ricar", "Tanne", "Malco", "Raymo", "Odin", "Cesar", "Lenno", "Joaqu", "Kane", "Wade", "Muham", "Iker", "Jayle", "Crew", "Zayn", "Hecto", "Ellis", "Leone", "Cairo", "Garre", "Romeo", "Dakot", "Edwin", "Warre", "Juliu", "Major", "Donov", "Caide", "Tyson", "Nico", "Sergi", "Nasir", "Rory", "Devin", "Jaide", "Jared", "Kason", "Malik", "Jeffr", "Ismae", "Elian", "Marsh", "Lawso", "Desmo", "Winst", "Nehem", "Ari", "Conne", "Jay", "Kade", "Andy", "Johnn", "Jayce", "Marco", "Seth", "Ibrah", "Raide", "Colli", "Edgar", "Erik", "Troy", "Clark", "Jaxto", "Johna", "Grego", "Russe", "Royce", "Fabia", "Ezequ", "Noel", "Pablo", "Cade", "Pedro", "Sulli", "Trevo", "Reed"];
exports.names = names;
var fnames = ["Olivia", "Emma", "Ava", "Sophia", "Isabella", "Charlotte", "Amelia", "Mia", "Harper", "Evelyn", "Abigail", "Emily", "Ella", "Elizabeth", "Camila", "Luna", "Sofia", "Avery", "Mila", "Aria", "Scar", "Pene", "Layl", "Chlo", "Vict", "Madi", "Elea", "Grac", "Nora", "Rile", "Zoey", "Hann", "Haze", "Lily", "Elli", "Viol", "Lill", "Zoe", "Stel", "Auro", "Nata", "Emil", "Ever", "Leah", "Aubr", "Will", "Addi", "Lucy", "Audr", "Bell", "Nova", "Broo", "Pais", "Sava", "Clai", "Skyl", "Isla", "Gene", "Naom", "Elen", "Caro", "Elia", "Anna", "Maya", "Vale", "Ruby", "Kenn", "Ivy", "Aria", "Aali", "Cora", "Made", "Alic", "Kins", "Hail", "Gabr", "Alli", "Gian", "Sere", "Sama", "Sara", "Autu", "Quin", "Eva", "Soph", "Sadi", "Deli", "Jose", "Neva", "Adel", "Arya", "Emer", "Lydi", "Clar", "Vivi", "Made", "Peyt", "Juli", "Ryle", "Brie", "Reag", "Nata", "Jade", "Athe", "Mari", "Leil", "Ever", "Lili", "Mela", "Mack", "Hadl", "Rael", "Kayl", "Rose", "Aria", "Isab", "Melo", "Eliz", "Lyla", "Kath", "Aubr", "Adal", "Kyli", "Fait", "Mary", "Marg", "Xime", "Iris", "Alex", "Jasm", "Char", "Amay", "Tayl", "Isab", "Ashl", "Khlo", "Ryle", "Alex", "Amar", "Vale", "Andr", "Park", "Nora", "Eden", "Elli", "Bria", "Emer", "Vale", "Anas", "Eloi", "Emer", "Ceci", "Remi", "Josi", "Alin", "Rees", "Bail", "Luci", "Adal", "Moll", "Ayla", "Sara", "Dais", "Lond", "Jord", "Esth", "Gene", "Harm", "Anna", "Alys", "Arie", "Aliy", "Lond", "Juli", "Morg", "Summ", "Juli", "Trin", "Call", "Sien", "Blak", "Alai", "Kayl", "Teag", "Alai", "Bryn", "Finl", "Cata", "Sloa", "Rach", "Lill", "Embe", "Kimb", "Juni", "Sydn", "Arab", "Gemm", "Joce", "Frey", "June", "Laur", "Amy", "Pres", "Geor", "Jour", "Elis", "Rosa", "Ada", "Lail", "Broo", "Dian", "Oliv", "Rive", "Payt", "Arie", "Dani", "Raeg", "Alay", "Grac", "Mya", "Blak", "Noel", "Ana", "Leil", "Paig", "Lila", "Nico", "Rowa", "Hope", "Ruth", "Alan", "Sele", "Marl", "Kami", "Alex", "Mcke", "Zara", "Mill", "Magn", "Kali", "Kehl", "Cath", "Maev", "Adel", "Sawy", "Elsi", "Lola", "Jayl", "Adri", "Jour", "Vera", "Aspe", "Joan", "Aliv", "Ange", "Dako", "Cami", "Nyla", "Tess", "Broo", "Mali", "Maka", "Rebe", "Fion", "Mari", "Lena", "Juli", "Vane", "Juli", "Cami", "Kend", "Harl", "Cali", "Evan", "Mari", "Jane", "Zuri", "Elai", "Sage", "Amir", "Adal", "Lia", "Char", "Dela", "Lila", "Miri", "Ange", "Mcke", "Aniy", "Phoe", "Mich", "Thea", "Hayd", "Magg", "Luci", "Amiy", "Anni", "Alex", "Myla", "Vivi", "Kiar", "Alan", "Marg", "Adel", "Brie", "Bryn", "Sayl", "Dest", "Amar", "Evel", "Have", "Phoe", "Izab", "Kaia", "Lill", "Harl", "Ales", "Madi", "Nina", "Loga", "Adel", "Amin", "Kate", "Fati", "Sama", "Wint", "Gise", "Evie", "Arie", "Jess", "Tali", "Leia", "Gabr", "Grac", "Lexi", "Laur", "Make", "Meli", "Roya", "Ryli", "Rael", "Gabr", "Pari", "Dale", "Joy", "Mais", "Oakl", "Ariy", "Kail", "Alay", "Step", "Amor", "Will", "Grac", "Elle", "Keir", "Tatu", "Vero", "Mila", "Feli", "Pais", "Alli", "Nyla", "Aria", "Cass", "Lyri", "Made", "Mira", "Gwen", "Octa", "Dahl", "Heid", "Cele", "Remi", "Make", "Ever", "Scar", "Esme", "Maci", "Lain", "Jacq", "Kira", "Lana", "Brin", "Demi", "Ophe", "Lenn", "Reig", "Bris", "Sabr", "Alay", "Jenn", "Kenz", "Ange", "Luci", "Anay", "Hall", "Ryan", "Camryn", "Skye"];
exports.fnames = fnames;
var titles = [];
/* let c = 0;
for (let item of fnames) {
    c++;
}
console.log(c); */
//15 names

exports.titles = titles;
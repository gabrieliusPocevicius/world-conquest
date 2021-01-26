import { avg, add } from "/World AI/Logic/Util.js";


// map definition
class Map {
    constructor() {

    }
}

class Interaction {
    constructor(trade, besiege, recruit, train) {
        this.trade = trade;
        this.besiege = besiege;
        this.recruit = recruit;
        this.train = train;


        function trade(whoWith) {
            whoWith = { name: "", items: {} };
            trading = false;
            if (items > 0) {
                trading = false;
                console.log("has nothing to trade")
            }
            // makes sure the person your trading with is close enough to you
            if (whoWith != undefined && contact < 5) {
                trading = true;
                console.log("Trading")
            } else {
                console.log("You are too far away from him to trade, move closer.")
            }
        }
    }

}
//on map class
class Settlement {
    constructor(name, pop, strength, walled, troops, food, wealth) {
        //city name
        this.name = name;
        // city population 
        this.pop = pop;
        // total city stength
        this.stength = strength;
        //is the city walled  height of the wall
        this.walled = walled;
        // garrison troops 
        this.troops = troops;
        // food the city stores
        this.food = food;
        // total wealth of the settlement
        this.wealth = wealth;

        this.wallWidth = wallWidth;

        walled = false;
        // settlement sizes
        //not tested
        var settlement = ["SMALL VILLAGE", "VILLAGE", "SMALL TOWN", "TOWN", "SMALL CITY", "CITY", "CAPITAL CITY", "MEGA METROPOLIS"];
        // types of sizes
        // not tested
        function market() {

            var roads = [];

            for (let i = 0; i < settlement.length; i++) {
                roads += settlement[i];
                console.log("road:" + roads)
            }

            var trade = this.pop * roads[3]
            console.log(`trade${trade}`)
            return trade;
        }



        function farm(fertility = Math.random() * 100, trade) {
            var farmers = this.pop / 10;
            this.food = farmers * fertility + trade
            return this.food;
        }

        function howManyGuards(pop, food, wallSize, wealth) {
            //answers the question
            //of the strenght of the settlement
            strength = (this.wealth + this.food + wallWidth) * this.pop;

            if (settlement[0] && walled === false) {
                return strength / 2;


            } else if (settlement[1] && walled) {
                return strength / 3;
            }
        }

        function enter() {
            //If want to enter the settlement
            if (this.walled === true) {
                console.log(this.name + ' is ' + 'heavily guarded and walled');


                console.log('Ask the guards to let you in?')
                console.log("Bribe the guards");
                console.log("Assassin the guards");
                console.log("Lie about letting you in..")
            }



            function settlementSize() {

                if (this.pop > 13 && this.pop <= 50) {
                    console.log(settlement[0]);
                }
                if (this.pop > 50 && this.pop <= 250) {
                    console.log(settlement[1]);
                }
                if (this.pop > 250 && this.pop <= 1000) {
                    console.log(settlement[2])
                }
                if (this.pop > 1000 && this.pop <= 25000) {
                    console.log(settlement[3])
                }
                if (this.pop > 25000 && this.pop <= 50000) {
                    console.log(settlement[4])
                }
                if (this.pop > 50000 &&
                    this.pop <= 100000) {
                    console.log(settlement[5])
                }
                if (this.pop > 100000 && this.pop <= 300000) {
                    console.log(settlement[6])
                }
                if (this.pop > 300000 && this.pop <= 1000000) {
                    console.log(settlement[7])
                }
            }
        }
    }
}
let worldWealth = 1000;
console.log('wealth', worldWealth);






let person = {
    name:'John Doe',
    wealth: 0
}

let person1 = {
    name:'James Johnson',
    wealth: 0
}


class Economics{
    constructor(){

    }

    createJob(){
        
    }

    addWealth(takenWealth, person){
        worldWealth -= takenWealth;
        person.wealth = takenWealth;
        (worldWealth >= takenWealth)?console.log(takenWealth, 'wealth to', person.name, 'Global Wealth left:', worldWealth):console.log('No more wealth left for ', person);
        
    };
    transfer(wealth, from, to){
        (wealth <= from.wealth)?console.log(from,' payed ', to):console.log(from, 'cant afford to pay to ', to);
    };
};


person.wealth = new Economics().addWealth(10, person);
person.wealth = new Economics().transfer(5, person, person1);












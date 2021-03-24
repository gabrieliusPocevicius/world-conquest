let worldWealth = 1000;
console.log('wealth', worldWealth);



let person = {
    name:'John Doe',
    wealth: 0,
    wallet(){
        console.log(this.name, 'has', this.wealth)
    }
}

let person1 = {
    name:'James Johnson',
    wealth: 0,
    wallet(){
        console.log(this.name, 'has', this.wealth)
    }
}


/* class Economics{
    constructor(){

    }
    createJob(){
    }
}; */

//get the resource 
function mine(takenWealth, person){
        person.wealth += takenWealth;
        worldWealth -= takenWealth;
        (worldWealth >= takenWealth)? console.log(person.wealth, 'wealth to', person.name, 'Global Wealth left:', worldWealth):console.log('No more wealth left for ', person);
        return person.wealth;
};

/* function imployment(payee, employee){
   //bussines
} */

function transfer(wealth, from, to){
        if(wealth <= from.wealth){
            from.wealth -= wealth;
            to.wealth += wealth;
            console.log(from.name,'payed', wealth,'to', to.name);
        }
        else{
            console.log(from.name, 'cant afford to pay', to.name);
        };
};
//simple transaction

mine(10, person);//mine gold
transfer(7, person, person1);// pay wages to someone



person.wallet();
person1.wallet();













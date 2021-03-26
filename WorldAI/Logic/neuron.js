/* 
let input = [1,2,3,4];


function synapse(){

}


function neuron(...input) {
    let decision = Math.random() * 2 | 0;
    let thought = (decision)? [...input, decision]:[];
    return thought;
}

console.log(neuron(input));
 */

let action = ['Peace', 'War']

let choose = ()=>{
    let decision = Math.random() * 101 | 0;
        if(decision > 50){
 console.log(action[0]);
        }else{
     console.log(action[1]);
        }
    }

console.log(choose());





/* 
    synapse  1 or 0

    bias = -2


 */
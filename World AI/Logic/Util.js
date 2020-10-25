export { avg, add, getRandom, distanceBetween, midpoint, probability };



/*distance between points(6, 6) and(2, 3)

d = √(6– 2)² + (6– 3)²
d = √(4)² + (3)²
d = √16 + 3
d = √25
d = 5
*/

function avg(...values) {
    // returns the average of all the parameters
    if (values.length === 0) {
        return 0;
    }
    var sum = 0
    for (let i in values) {
        if (values.hasOwnProperty(i)) {
            sum += values[i];
        }
    }
    return sum / values.length;
}




function distanceBetween(x1, y1, x2, y2) {
    var x = x1 - x2
    var y = y1 - y2
    var d = Math.pow(x, 2) + Math.pow(y, 2)
    var result = Math.sqrt(d);
    //console.log('distance: ' + result + 'm');
    return result;
}

distanceBetween(6, 2, 6, 3);


/*midpoint between(-1, 2) and(3, -6)
(-1 + 3) / 2, (2 + -6) / 2
2 / 2, -4 / 2
Midpoint(1, -2)
*/

function midpoint(x1, y1, x2, y2) {
    var x = (x1 + x2) / 2;
    var y = (y1 + y2) / 2;
    var midPoint = [];
    midPoint.push(x);
    midPoint.push(y);
    console.log('mid point ' + midPoint + "m")
    return midPoint;
}


function add(...values) {
    if (values.length === 0) {
        return 0;
    }

    var sum = 0;
    for (let i in values) {
        sum += values[i]
    }
    return sum;
}

function probability(x = 10, item = 5) {
    // @param {x} x outof that many items
    var totalItems = x;
    var itemSelected = item;
    var probability = itemSelected / totalItems;
    return (probability * 100) + "%";
};

function getRandom(min, max) {
    var value = Math.floor(Math.random() * (max - min)) + min;
    return value;
}
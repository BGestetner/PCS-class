'use strict'

function multiply(x, y) {
    return x * y;
}

console.log(multiply(1, 3));//3
console.log(multiply(9, 3));//27
console.log(multiply(1, 7));//7
console.log(multiply(1, '7'));//7

/////////////////////////
function getMultiplier() {
    return function multiplier (x,y){
        return x * y;
    }
}

const multiplier = getMultiplier();
console.log(multiplier(1, 3));//3
console.log(multiplier(9, 3));//27
console.log(multiplier(1, '3'));//3
/////////////////////////


function getSpecifiedMultiplier(x) {
    return function multiplier(y) {
        return x * y;
    }
}

const doubler = getSpecifiedMultiplier(2);
console.log(doubler(7));// 14
console.log(doubler(8));//16

const tripler = getSpecifiedMultiplier(3);
console.log(tripler(7));//21
console.log(tripler(8));//24
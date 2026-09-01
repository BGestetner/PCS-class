'use strict'
const allEven = [2, 4, 6, 8];
const allOdd = [1, 3, 5, 7, 9];
const mix = [1, 2, 3, 4];

function myEvery(array, testCallBack) {
    // console.log('in my every',array.length);
    for (let i = 0; i < array.length; i++){
        // console.log('in for loop');
        let result = testCallBack(array[i]);
        if (!result) {
            return false;
        }
    }
    return true;
}

function isEven(n) {
    // console.log('testing if even');
    if (n % 2 ===0|| n === 0) {
        // console.log(n,'true');
        return true;
    } else {
        // console.log(n, 'false');
        return false;
    }
}

console.log(myEvery(allEven, isEven));//true
console.log(myEvery(allOdd, isEven));//false
console.log(myEvery(mix, isEven));//false

/////////////////////////////////////////

function mySome(array, testCallBack) {
    for (let i = 0; i < array.length; i++){
        if (testCallBack(array[i])){
            return true;
        }
    }
    return false;
}

console.log(mySome(allEven, isEven));//true
console.log(mySome(allOdd, isEven));//false
console.log(mySome(mix, isEven));//true
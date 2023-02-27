'use strict';

function printNumbers(userValue) {
    for (let num = 0; num < userValue; num++) {
        let number = num + 1;
        console.log(`Число ${number}: ${num}`);
    }
}
printNumbers(5);
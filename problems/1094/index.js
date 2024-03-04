const fs = require('fs');
let x = Number(fs.readFileSync('./input.txt', 'utf-8').trim());

/**
 * 
 * @param {Number[]} numberArray 
 */
function cut(numberArray, x){
    while(numberArray.reduce((p, c) => p+c, 0) > x){
        numberArray.sort((a, b) => a-b)

        let smallest = numberArray[0];
        let piece = smallest/2;

        if(numberArray.reduce((p, c) => p+c, 0) - piece >= x){
            numberArray[0] = piece;
        }
        else{
            numberArray[0] = piece;
            numberArray.unshift(piece);
        }
    }

    return numberArray.length;
}

console.log(cut([64], x))
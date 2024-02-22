const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => Number(e));

let a = input[0];
let b = input[1];

let multipliedValues = b.toString().split('').map(e => a * Number(e)).reverse();
let multiplied = multipliedValues.reduce((partialSum, a, i) => partialSum + a*(10 ** i), 0);

console.log([...multipliedValues, multiplied].join('\n'))
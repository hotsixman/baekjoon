const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf-8').trim().split(' ').map(e => Number(e));

console.log(`${input.reduce((p, a) => p+a, 0)}`)
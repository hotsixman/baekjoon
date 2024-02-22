const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n')[0].split(' ').map(e => Number(e.trim()));
console.log([input[0] + input[1], input[0] - input[1], input[0] * input[1], Number.parseInt(input[0] / input[1]), input[0] % input[1]].join('\n'))
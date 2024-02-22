const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n')[0].split(' ')[0].trim();
console.log(`${input}??!`);
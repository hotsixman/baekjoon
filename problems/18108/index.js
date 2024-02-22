const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n')[0].split(' ')[0].trim();
console.log(`${Number(input) - 543}`);
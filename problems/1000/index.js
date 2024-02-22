const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n')[0].split(' ').map(e => Number(e));
console.log(input[0] + input[1]);
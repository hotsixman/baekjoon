const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(e => Number(e));
let A = input[0];
let B = input[1];
let C = input[2];
console.log(`${(A+B)%C}
${((A%C) + (B%C))%C}
${(A*B)%C}
${((A%C) * (B%C))%C}`)
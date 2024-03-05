const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);

let r;
for(let i = 0; i < input[2]; i++){
    input[0] = input[0] % input[1] * 10;
    r = input[0] / input[1];
}

console.log(Math.floor(r));
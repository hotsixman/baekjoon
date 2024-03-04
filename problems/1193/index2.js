const fs = require('fs');
let X = Number(fs.readFileSync('./input.txt', 'utf-8').trim());

let a = 1;
let b = 1;
while(b < X){
    b += a + 1;
    a++;
}

const c = a - (b - X);

if (a % 2 === 0) {
    console.log(`${c}/${a - c + 1}`);
} else {
    console.log(`${a - c + 1}/${c}`);
}
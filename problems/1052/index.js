const fs = require('fs');
function main() {
    let input = fs.readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);

    let bottles = input[0];
    let max = input[1];

    console.log(getBottles(bottles, max))
}

function toBin(num){
    let c = 0;
    while(num > 0){
        if(num % 2 === 1){
            c++;
        }
        num = Math.floor(num/2);
    }
    return c;
}

function getBottles(bottles, max){
    let b = 0;
    while(true){
        let c = toBin(bottles);
        if(c <= max){
            return b;
        }
        b++;
        bottles++;
    }
}

main();
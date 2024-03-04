const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');

let tests = Number(input[0]);
let cases = input.map(e => e.split(' ').map(Number));
cases.shift();

console.log(cases.map((e, i) => {
    if(i < tests){
        return combination(e[1], e[0])
    }
    else{
        return null;
    }
}).filter(e => e !== null).join('\n'))

function combination(n, r){
    let i = n-r;

    if(i > r){
        let f = 1;
        for(let j = n; j > i; j --){
            f = f*j;
        }
        return f/factorial(r);
    }
    else{
        let f = 1;
        for(let j = n; j > r; j --){
            f = f*j;
        }
        return f/factorial(i);;
    }
}

function factorial(n){
    let r = 1;
    for(let i = n; i > 0; i--){
        r = r * i;
    }
    return r;
}
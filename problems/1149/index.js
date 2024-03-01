const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');

let homes = Number(input[0]);
let prices = input.map(e => {
    return e.split(' ').map(Number)
});
prices.shift();

let ps = [...prices[0]];
for(let i = 1; i< homes; i++){
    let p1 = Math.min(prices[i][0] + ps[1], prices[i][0] + ps[2]);
    let p2 = Math.min(prices[i][1] + ps[0], prices[i][1] + ps[2]);
    let p3 = Math.min(prices[i][2] + ps[0], prices[i][2] + ps[1]);

    ps = [p1, p2, p3]
}

console.log(Math.min(...ps));
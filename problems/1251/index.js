const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf-8').trim().split('');

let wordList = [];
for(let i = 1; i < input.length - 1; i++){
    for(let j = 0; j < i; j++){
        let jnput = [...input]
        let w1 = jnput.splice(0, j+1);
        let w2 = jnput.splice(0, i-j);

        w1.reverse();
        w2.reverse();
        jnput.reverse();

        wordList.push([w1.join(''), w2.join(''), jnput.join('')].join(''))
    }
}

console.log(wordList.sort()[0]);
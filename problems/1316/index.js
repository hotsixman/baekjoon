const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.trim());

let count = Number(input[0]);
input.shift();
let words = input;

let c = 0;
for(let i = 0; i < count; i++){
    let word = words[i];
    let chars = [];
    let currentChar;
    let include = true;
    for(let j = 0; j < word.length; j++){
        if(word[j] === currentChar){

        }
        else if(chars.find(e => e === word[j])){
            include = false;
        }
        else{
            currentChar = word[j];
            chars.push(word[j])
        }
    }
    if(include){
        c++;
    }
}

console.log(c);
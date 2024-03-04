const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');
let wordCount = Number(input[0]);
let words = input.map(e => e.trim())
words.shift();
words.sort((a, b) => a.length - b.length)

let currentLength = null;
let currentGroup = new Set();
let wordGroupedByLength = [];

words.forEach(e => {
    if(currentLength === null){
        currentLength = e.length;
        wordGroupedByLength.push(currentGroup);
        currentGroup.add(e);
    }
    else if(currentLength === e.length){
        currentGroup.add(e);
    }
    else{
        currentLength = e.length;
        currentGroup = new Set();
        wordGroupedByLength.push(currentGroup);
        currentGroup.add(e);
    }
})

console.log(wordGroupedByLength.map(e => {
    return [...e].sort().join('\n')
}).join('\n'))
const getDateDiff = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    
    const diffDate = date1.getTime() - date2.getTime();
    
    return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
  }

const fs = require('fs');
let dates = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n')

let d1 = dates[0].split(' ').map(Number);
let d2 = dates[1].split(' ').map(Number)

if(d2[0] > d1[0] + 1000){
    console.log('gg');
}
else if(d2[0] === d1[0] + 1000 && (d1[1], d1[2]) <= (d2[1], d2[2])){
    console.log('gg');
}
else{
    let d = getDateDiff(new Date(dates[1]), new Date(dates[0]));

    console.log(`D-${d}`)
}
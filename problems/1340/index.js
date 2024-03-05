const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf-8').trim();
let parsed = parse(input);
getPercentage(parsed.year, parsed.month, parsed.day, parsed.time)

function parse(string){
    let [a,b] = string.split(',').map(e => e.trim());
    let month = a.split(' ')[0];
    let day = Number(a.split(' ')[1]);
    let year = Number(b.split(' ')[0]);
    let time = b.split(' ')[1];

    return{
        year,
        month,
        day,
        time
    }
}

function isLeap(year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return true;
    }
    return false;
}

function getPreviousDays(month, isLeap){
    let d = 0;
    let m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let i = m.findIndex(mo => mo === month);

    if(i > 0){
        d += 31;
    }
    if(i > 1){
        d += 28;
    }
    if(i > 2){
        d += 31
    }
    if(i > 3){
        d += 30
    }
    if(i > 4){
        d += 31
    }
    if(i > 5){
        d += 30
    }
    if(i > 6){
        d += 31
    }
    if(i > 7){
        d += 31
    }
    if(i > 8){
        d += 30;
    }
    if( i > 9){
        d += 31
    }
    if( i > 10){
        d += 30
    }

    if(isLeap && i > 1){
        d += 1;
    }

    return d;
}

function timeToMin(time){
    let [hour, minute] = time.split(':').map(Number);

    minute += hour * 60;

    return minute
}

function dateToDay(year, month, day){
    let leap = isLeap(year);

    day += getPreviousDays(month, leap);

    return day;
}

function dayToMin(day, minute){
    minute += (day-1) * 1440;
    return minute;
}

function getPercentage(year, month, day, time){
    let days = dateToDay(year, month, day);
    let minutes = dayToMin(days, timeToMin(time));

    if(isLeap(year)){
        console.log(parseFloat(minutes*100/527040))
    }
    else{
        console.log(parseFloat(minutes*100/525600))
    }
}
const fs = require('fs');
function main() {
    //let input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
    let input = "XX.XXXXXXXXXX..XXXXXXXX...XXXXXX"

    let list = input.split('.');

    try{
        list.forEach(e => {
            if(e.length % 2 === 1){
                console.log(-1);
                throw new Error('-1')
            }
        })
    }
    catch{
        return 0;
    }

    console.log(list.map(e => {
        let a = Math.floor(e.length / 4);
        let b = e.length % 4;

        let text = '';
        for(let i = 0; i < a; i++){
            text += 'AAAA';
        }
        for(let i = 0; i < b; i++){
            text += 'B';
        }

        return text;
    }).join('.'))
}

main();
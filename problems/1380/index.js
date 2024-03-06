const fs = require("fs");

function main(){
    let input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.trim());

    let splitedInputs = splitInput(input);

    let result = splitedInputs.map(e => new Scenario(e)).map(e => e.run());

    console.log(result.map((e, i) => `${i+1} ${e}`).join('\n'));
}

/**
 * 
 * @param {string[]} input 
 */
function splitInput(input){
    const splitedScenarios = [];

    let currentScenario = [];

    input.forEach(e => {
        if(/[0-9]$/.test(e)){
            currentScenario = [];
            splitedScenarios.push(currentScenario);
        }
        currentScenario.push(e);
    });

    return splitedScenarios.filter(e => e[0] !== '0');
}

class Scenario{
    students = [];
    actions = [];
    /**
     * 
     * @param {string[]} splitedScenario 
     */
    constructor(splitedScenario){
        let studentsCount = Number(splitedScenario[0]);

        for(let i = 1; i < 1 + studentsCount; i++){
            this.students.push(splitedScenario[i])
        }

        for(let i = 1 + studentsCount; i < splitedScenario.length; i++){
            this.actions.push(splitedScenario[i])
        }
    }

    run(){
        let notGetBacked = new Set();
        this.actions.forEach(e => {
            let [studentIndex, action] = e.split(' ');

            if(notGetBacked.has(studentIndex)){
                notGetBacked.delete(studentIndex);
            }
            else{
                notGetBacked.add(studentIndex);
            }
        })

        return [...notGetBacked].map(e => this.students[e-1]);
    }
}

main();
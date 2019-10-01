import * as readline from 'readline';

let number1:number;
let number2:number;
let result:number;

var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



r1.question("Suma de dos numeros. Escribe el primero: ", (answer) =>{
    number1 = +answer;
    r1.question("Escribe el segundo ", (answer2)=>{
        number2 = +answer2;
        result = number1+number2
        console.log("Result is: ", result)
        r1.close();
    })
});

console.log("me colao")

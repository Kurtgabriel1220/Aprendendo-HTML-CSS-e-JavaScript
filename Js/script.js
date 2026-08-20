/* console.log("Ola JavaScript!"); */
let meunome = "Kurt Gabriel"
let idade = 19

const altura = 1.65

console.log("Meu nome é " + meunome + " e tenho " + idade + " anos.")
console.log("Minha altura é: " + altura)

if (idade == 19) {
    console.log("Você tem 19 anos.");
} else {
    console.log("Você não tem 19 anos.");
}


while (idade < 40) {
    console.log("Você ainda não precisa fazer exame de prostata.");
    idade = idade + 1
}

for(let i = 0; i < 10; i = i + 1) {
    console.log(i) 
}

function somar (x, y) {
    return x + y
}

let resultado = somar(4, 5);
    console.log("O resultado da soma é: " + resultado);
    
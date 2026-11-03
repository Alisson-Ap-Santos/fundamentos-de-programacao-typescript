import teclado from "npm:readline-sync";

let a1: number = 0,
    a2: number = 0,
    a3: number = 0,
    a4: number = 0,
    media: number = 0;

console.log("Digite a nota da Avaliação 1:");
a1 = teclado.questionFloat();

console.log("Digite a nota da Avaliação 2:");
a2 = teclado.questionFloat();

console.log("Digite a nota da Avaliação 3:");
a3 = teclado.questionFloat();

console.log("Digite a nota da Avaliação 4:");
a4 = teclado.questionFloat();

media = (a1 + (a2 * 2) + (a3 * 3) + (a4 * 4)) / 10;
// Evita ambiguidade de leitura para a expressão:
// media = (a1 + a2*2 + a3*3 + a4*4) / 10;

console.log();
console.log("A média ponderada é:");
console.log(media);
import teclado from "npm:readline-sync";

let numero: number = 0,
    quadrado: number = 0;

console.log("Digite um valor inteiro:");
numero = teclado.questionInt();

quadrado = numero * numero;
// quadrado = numero ** 2;

console.log();
console.log("O quadrado de " + numero + " é: " + quadrado);
import teclado from "npm:readline-sync";

let a: number = 0,
    b: number = 0;

console.log("Digite o valor de A:");
a = teclado.questionInt();

console.log("Digite o valor de B:");
b = teclado.questionInt();

/*
 Cuidado!
 Perceba que as instruções abaixo não promovem a troca de
 valores.
 
 Faça um teste.
 */

a = b;
b = a;

console.log();
console.log("O novo valor de A é: " + a);
console.log("O novo valor de B é: " + b);
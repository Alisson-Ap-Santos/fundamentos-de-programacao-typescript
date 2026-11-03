import teclado from "npm:readline-sync";

let numero: number = 0,
    m: number = 0,
    c: number = 0,
    d: number = 0,
    u: number = 0,
    resto: number = 0;

console.log("Digite um valor inteiro:");
numero = teclado.questionInt();

m = Math.trunc(numero / 1000);
resto = numero % 1000;

c = Math.trunc(resto / 100);
resto = numero % 100

d = Math.trunc(resto / 10);
resto = numero % 10;

u = resto;   // A variável U poderia ser suprimida.

console.log();
console.log("O número é:");
console.log(m);
console.log(c);
console.log(d);
console.log(u);
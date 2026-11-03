import teclado from "npm:readline-sync";

let ml: number = 0,
    gotas: number = 0;

console.log("Digite a quantidade da solução (em mililitros):");
ml = teclado.questionFloat();

gotas = ml * 20;

console.log();
console.log("A quantidade da solução em gotas é");
console.log(gotas);
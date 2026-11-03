import teclado from "npm:readline-sync";

let salario: number = 0,
    novoSalario: number = 0;

console.log("Digite o valor do salário:");
salario = teclado.questionFloat();

novoSalario = salario * 1.125;

console.log();
console.log("O valor do salário reajustado é:");
console.log(novoSalario);
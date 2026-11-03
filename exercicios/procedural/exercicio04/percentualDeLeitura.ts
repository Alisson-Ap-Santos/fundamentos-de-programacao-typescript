import teclado from "npm:readline-sync";

let paginaAtual: number = 0,
    paginasTotal: number = 0,
    percentual: number = 0;

console.log("Digite a página atual da leitura:");
paginaAtual = teclado.questionInt();

console.log("Digite a quantidade total de páginas do livro");
paginasTotal = teclado.questionInt();

percentual = (paginaAtual / paginasTotal) * 100;

console.log();
console.log("O percentual de leitura concluído é:");
console.log(percentual);
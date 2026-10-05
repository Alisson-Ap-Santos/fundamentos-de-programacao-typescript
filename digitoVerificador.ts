// EXERCICIOS: INTRODUÇÃO AOS APLICATIVOSS TYPESCRIPT

// EX 01 GOTAS

//import entrada, { questionInt } from" npm:readline-sync";
/*
let ml: number = 0,
    gotas: number = 0;
    
console.log("Digite o ML:");
ml = entrada.questionFloat();


gotas = ml / 0.05;

console.log("Equivale ha: "+ gotas + " gotas");*/




//EX 02 MEDIA PONDERADA

/*
let nota1: number = 0;
let nota2: number = 0;
let nota3: number = 0;
let nota4: number = 0;
let media: number = 0;
const somaPeso: number = 1 + 2 + 3 + 4;

console.log("Digite a nota 01: ");
nota1 = entrada.questionInt();
console.log("Digite a nota 02: ");
nota2 = entrada.questionInt();
console.log("Digite a nota 03: ");
nota3 = entrada.questionInt();
console.log("Digite a nota 04: ");
nota4 = entrada.questionInt();

media = (nota1 * 1 + nota2 * 2 + nota3 * 3 + nota4 * 4) /  somaPeso;

console.log(`A media ponderada é: ${media}`);





*/

/*
let horasAula: number = 0;
let horasRelogio: number = 0;

console.log("Digite horas-aula: ");
horasAula = entrada.questionInt();

horasRelogio = (horasAula * 50) / 60;

console.log("Conversao para hora-relogio: " + horasRelogio);

*/

/*
let paginaAtual: number = 0;
let QtdPaginas: number = 0;
let percentual: number = 0;


console.log("Digite a pagina atual do livro: ");
paginaAtual = entrada.questionInt();
console.log("Digite o total de paginas do livro: ");
QtdPaginas = entrada.questionInt();

percentual = paginaAtual / QtdPaginas * 100;

console.log(percentual + "% concluido");
*/

/*
let valorProduto:number = 0;
let desconto:number = 0;

console.log("Digite o preço do produto: ");
valorProduto = entrada.questionInt();

desconto = valorProduto - valorProduto * (35 / 100);

console.log("Preço com desconto: " + desconto);
*/

/* 
06

let valorProduto:number = 0;
let aumento:number = 0;

console.log("Digite o salario: ");
valorProduto = entrada.questionInt();

aumento = valorProduto * (1 + (12.5 / 100));

console.log("Salario com aumento: " + aumento); */



// 07
/*

let a: number = 0, b: number = 0, aux: number = 0;

console.log("Digite o valor de A: ");
a = questionInt();
console.log("Digite o valor de B: ");
b = questionInt();

aux = a;
a = b;
b = aux;

console.log("O novo valor de A é: " + a);
console.log("O novo valor de B é: " + b);

*/

//08
/*

let numero: number = 0;
let quadrado: number;

console.log("Digite o numero inteiro");
numero = questionInt();

quadrado = numero ** 2;

console.log("O quadrado de " + numero + " é " + quadrado);*/

// 09


//10
/*

let numeroConta: number, resto: number, a: number, b: number, c: number, d: number, e: number, f: number;
let verificador: number;
let multipSoma: number, multipResto: number;


console.log("Digite o numero da conta: ");
numeroConta = questionInt();

a = Math.trunc(numeroConta / 100000);
resto = numeroConta % 100000;

b = Math.trunc(resto / 10000);
resto = numeroConta % 10000;

c = Math.trunc(resto / 1000);a
a
a   
resto = numeroConta % 1000;

d = Math.trunc(resto / 100);
resto = numeroConta % 100;

e = Math.trunc(resto / 10);
resto = numeroConta % 10;

f = resto;

multipSoma = (a * 1) + (b * 2) + (c * 3) + (d * 4) + (e * 5) + (f * 6);
multipResto = multipSoma % 10;
verificador = 10 - multipResto;

console.log("Digito verificador: "+ verificador);


*/













import teclado from "readline-sync";

let conta: number = 0,
    d1: number = 0,  
    d2: number = 0,
    d3: number = 0,
    d4: number = 0,
    d5: number = 0,
    d6: number = 0,
    resto : number,
    soma: number = 0,
    verificador: number = 0;

console.log("Digite o número da conta corrente:");
conta = teclado.questionInt();

d1 = Math.trunc(conta / 100000);
resto = conta % 100000;

d2 = Math.trunc(resto / 10000);
resto = conta % 10000;

d3 = Math.trunc(resto / 1000);
resto = conta % 1000;

d4 = Math.trunc(resto / 100);
resto = conta % 100;

d5 = Math.trunc(resto / 10);
resto = conta % 10;

d6 = resto;   // A variável D6 poderia ser suprimida.

/*
 Como saber se os dígitos foram separados corretamente?
 console.log(d1);
 console.log(d2);
 console.log(d3);
 console.log(d4);
 console.log(d5);
 console.log(d6);
*/ 

soma = d1 + d2*2 + d3*3 + d4*4 + d5*5 + d6*6;

resto = soma % 10;

verificador = 10 - resto;

console.log();
console.log("O dígito verificador da conta é:");
console.log(verificador);
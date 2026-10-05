/*
Exercício 1
REFRIGERANTES – Leia a quantidade de pessoas que confirmaram presença em uma
confraternização. Considere que cada pessoa bebe, em média, 300ml de refrigerante e que cada
garrafa da bebida tem 2l. Identifique as constantes e fixe-as no código. Calcule e exiba quantas
garrafas devem ser compradas. 
*/


import entrada from "readline-sync"; 

let pessoas: number = 0;
let refrigeranteMl: number = 0;
let qtdGarrafa: number = 0;
const garrafaMl: number = 2000;


pessoas = entrada.questionInt("Digite a quantidade de pessoas: ");

refrigeranteMl = pessoas * 300;

qtdGarrafa = Math.ceil(refrigeranteMl / garrafaMl);


console.log(qtdGarrafa + " Garrafas devem ser compradas");








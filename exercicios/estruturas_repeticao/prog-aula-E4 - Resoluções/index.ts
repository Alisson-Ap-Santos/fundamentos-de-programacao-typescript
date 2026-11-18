import InteiroMatematico from "./InteiroMatematico.ts";

let umNumero: InteiroMatematico = new InteiroMatematico(-32);

console.log("Valor assumido para n é 32");
umNumero.getN();

console.log();
console.log("Tabuada de 32");
console.log(umNumero.tabuada());

console.log();
console.log("Multiplicação de 32 por 2");
console.log(umNumero.produtoPelaSoma(2));

console.log();
console.log("Multiplicação de 32 por 64");
console.log(umNumero.produtoPelaSoma(64));   // 2.048

console.log();
console.log("Cálculo de 32 elevado a 3");
console.log(umNumero.elevado(3));   // 3.2768

console.log();
console.log("Cálculo de 32 elevado a -1");
console.log(umNumero.elevado(-1));   // 0

console.log();
console.log("Cálculo de 32 elevado a 3 (método alternativo com FOR)");
console.log(umNumero.elevadoComFor(3));   // 32.768

console.log();
console.log("Alteração do valor de n para 6");
umNumero.setN(6);

console.log();
console.log("Verificação se 6 é triangular");
console.log(umNumero.isTriangular());   // true
// 1 x 2 x 3 = 6

console.log();
console.log("Alteração do valor de n para 8");
umNumero.setN(8);

console.log();
console.log("Verificação se 8 é triangular");
console.log(umNumero.isTriangular());   // false

console.log();
console.log("Calculo do 8º termo da sequência de Fibonacci");
console.log(umNumero.fibonacci());   // 21
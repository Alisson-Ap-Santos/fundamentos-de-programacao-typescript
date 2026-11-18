/*maiorDivisor()
Retorne  o  maior  divisor  de n,  exceto  ele  próprio.  Se n = 0,  ou n = 1,  retorne  1.  Caso n = 24, por 
exemplo, deve-se retornar 12.*/


const numero = 12;
let maiorDivisor = 0;

for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
        maiorDivisor = i;
    }
}

console.log("Maior divisor:", maiorDivisor);

//versao otimizada


const numero02 = 36;
let maiorDivisor02 = 1;

for (let i = 1; i <= Math.sqrt(numero02); i++) {
    if (numero02 % i === 0) {
        const divisor = numero02 / i;

        if (divisor !== numero02) {
            maiorDivisor02 = divisor;
        }
    }
}

console.log("Maior divisor:", maiorDivisor02);

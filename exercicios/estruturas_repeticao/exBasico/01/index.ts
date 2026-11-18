const numeros: number[] = [5, 10, 3, 2, 0];
let soma: number = 0;
for (let i = 0; i < numeros.length; i++) {
if (numeros[i] > 0)
 soma += numeros[i];

else {
    console.log("Número inválido encontrado (0 ou negativo)")
    break;
}
}


console.log(soma);
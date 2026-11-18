const numeros: number [] = [4,7,10,13,16,19,22,25];
let numPar: number = 0;
let numImpar: number = 0;
for(let i = 0 ; i < numeros.length; i++) {
if (numeros[i] % 2 == 0){
numPar++;
}
else {
    numImpar++;
}
}

console.log("Numeros pares: " + numPar + "\n" + "Numeros impares: " + numImpar)

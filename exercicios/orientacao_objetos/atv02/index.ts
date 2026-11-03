import Automovel from "./Automovel.ts";

let porsche: Automovel = new Automovel(67);

console.log("Comprei outro carro novo:");
console.log(porsche.toString());

console.log("Abasteci com 10 litros:");
porsche.abastecer(10);
console.log(porsche.toString());

console.log("Abasteci com mais 20 litros:");
porsche.abastecer(20);
console.log(porsche.toString());

console.log("Resolvi encher o tanque:");
porsche.completaTanque();
console.log(porsche.toString());

console.log("Tentei colocar mais 10 litros:");
porsche.abastecer(10);
console.log(porsche.toString());

import Termostato from "./Termostato.ts";

const Termostato01: Termostato = new Termostato();

console.log(Termostato01.getTemperatura());

console.log("Aumentar: ");
Termostato01.aumentarTemperatura(20);
console.log(Termostato01.getTemperatura());

console.log("Diminuir: ");
Termostato01.diminuirTemperatura(5);
console.log(Termostato01.getTemperatura());

console.log("Acima? ");
console.log(Termostato01.estaAcimaDe(10));

console.log("Acima? ");
console.log(Termostato01.estaAcimaDe(50));





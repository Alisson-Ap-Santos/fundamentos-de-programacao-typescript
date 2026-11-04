import Lampada from "./Lampada.ts";

let lampadaSala: Lampada = new Lampada("sala");

console.log(lampadaSala.toString());

console.log("ligar a lampada: ");
lampadaSala.ligar();
console.log(lampadaSala.toString());

console.log("desligar a lampada: ");
lampadaSala.desligar();
console.log(lampadaSala.toString());

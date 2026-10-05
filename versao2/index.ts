import Produto from "./produto.ts";

let guitarra: Produto = new Produto();

console.log("Descrição ", guitarra.descricao);
console.log("Descrição ", guitarra.valor);


 //cuidado isso fere o encapsulamento!!!

guitarra.descricao = "Guitarra Gibson SG stantard heritage cherry";
guitarra.valor = 1799;

console.log();
console.log(" Descricao ", guitarra.descricao);
console.log(" valor ", guitarra.valor);



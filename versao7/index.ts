import Produto from "./produto.ts";

let guitarra: Produto = new Produto();

console.log("Descrição ", guitarra.getDescricao());
console.log("Descrição ", guitarra.getValor());

guitarra.setDescricao("Guitarra gibson SG");
guitarra.setValor(1799);

console.log();
console.log("Descricao", guitarra.getDescricao());
console.log("Valor", guitarra.getValor());

guitarra.setValor(-1000);

console.log();
console.log("Descricao", guitarra.getDescricao());
console.log("Valor", guitarra.getValor());






import Produto from "./Produto.ts";

let produto01: Produto = new Produto("Arroz carioca", 19.9, 50);

console.log(
  "Valor total do estoque: " + produto01.calcularValorTotal().toFixed(2),
);

import Produto from "./Produto.ts";

const produto01: Produto = new Produto("Arroz carioca", 19.9, 50);

console.log(
  "Valor total do estoque: " + produto01.calcularValorTotal().toFixed(2),
);

console.log("Quantidade atual: "+ produto01.getQuantidade())

console.log("Adicionar 20 unidades: ");
produto01.adicionarEstoque(20);

console.log("Quantidade atual: "+ produto01.getQuantidade());

console.log("Retirar 10 unidades: ");
produto01.adicionarEstoque(10);



console.log("Quantidade atual: "+ produto01.getQuantidade());
console.log("Valor total do estoque: " + produto01.calcularValorTotal());
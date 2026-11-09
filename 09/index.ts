import Estoque from "./Estoque.ts";

const item01: Estoque = new Estoque(10);

console.log(item01.getQuantidade());
console.log("Adicionar 490: ");
item01.adicionar(490);
console.log(item01.getQuantidade());

console.log("Retirar 100: ")
item01.retirar(100);
console.log(item01.getQuantidade());

console.log("Tem 50 unidades? ");
console.log(item01.temDisponibilidade(50));

console.log("tem 800 unidades? ");
console.log(item01.temDisponibilidade(800));
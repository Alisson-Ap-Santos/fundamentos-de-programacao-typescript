import Produto from "./Produto.ts";

let barra: Produto = new Produto();
let ovo: Produto = new Produto();

ovo.descricao = "Ovo de Páscoa Diamante Negro";
ovo.peso = 0.176;
ovo.preco = 29.9;

console.log(barra.gerarEtiqueta());
console.log(ovo.gerarEtiqueta());

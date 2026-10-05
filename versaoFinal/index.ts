import Produto from "./produto.ts";

let guitarra: Produto = new Produto("Fender Standard Telecaster Olympic Write", 699);

//chamada do construtor com atributos


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
console.log("Valor com desconto:", guitarra.calculaComDesconto());
console.log("Valor da parcela (em 4 vezes) ", guitarra.calculaParcela(4));

let celular: Produto = new Produto("Samsung", 10);
console.log("teste");
console.log("informações", celular.getDescricao(), celular.getValor());
celular.setValor(2 * guitarra.getValor());
console.log("Novo valor do celular: ", celular.getValor());


import Pessoa from "./Pessoa.ts";

const maria: Pessoa = new Pessoa("Maria", 22);
const joao: Pessoa = new Pessoa("Joao", 19);

console.log(maria.saudacao());
console.log(joao.saudacao());

console.log(maria.apresentarPessoa(joao));

console.log(joao);



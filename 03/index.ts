import ContaBancaria from "./ContaBancaria.ts";

let titular01: ContaBancaria = new ContaBancaria("Joao");
console.log("Saldo atual da conta");
console.log("Saldo: " + titular01.getSaldo());

console.log("Deposito de 150");
titular01.depositar(150);
console.log("Saldo: " + titular01.getSaldo());

console.log("Deposito de 200");
titular01.depositar(200);
console.log("Saldo: " + titular01.getSaldo());

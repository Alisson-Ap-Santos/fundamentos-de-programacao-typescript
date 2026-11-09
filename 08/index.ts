import ContaBancaria from "./ContaBancaria.ts";

const conta01: ContaBancaria = new ContaBancaria("Joao");

console.log("Saldo: " + conta01.getSaldo() + "\n");
console.log("Deposito de 1000: ");
conta01.depositar(1000);
console.log("Saldo: " + conta01.getSaldo());

console.log("Saque de 500: ");
conta01.saque(500);
console.log("Saldo: " + conta01.getSaldo())
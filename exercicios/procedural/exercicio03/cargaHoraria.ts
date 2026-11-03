import teclado from "npm:readline-sync";

let horasAula: number = 0,
    horas: number = 0;

console.log("Digite a carga-horária do curso (em horas-aulas):");
horasAula = teclado.questionFloat();

horas = (horasAula * 50) / 60;

console.log();
console.log("A carga-horária do curso em horas-relógio é:");
console.log(horas);
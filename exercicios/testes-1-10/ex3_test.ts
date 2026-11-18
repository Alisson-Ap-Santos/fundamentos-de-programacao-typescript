import { expect } from "jsr:@std/expect";
import InteiroMatematico from "./InteiroMatematico.ts";

Deno.test("Ex 03 - numeroDeDivisores: Sucesso com número composto (6)", () => {
    const num = new InteiroMatematico(6); 
    // Divisores: 1, 2, 3, 6
    expect(num.numeroDeDivisores()).toBe(4);
});

Deno.test("Ex 03 - numeroDeDivisores: Caso limite com número primo (7)", () => {
    const num = new InteiroMatematico(7); 
    // Divisores: 1, 7
    expect(num.numeroDeDivisores()).toBe(2);
});

Deno.test("Ex 03 - numeroDeDivisores: Caso limite com n = 1", () => {
    const num = new InteiroMatematico(1); 
    // Divisores: 1
    expect(num.numeroDeDivisores()).toBe(1);
});

Deno.test("Ex 03 - numeroDeDivisores: Situação de erro/borda com n = 0", () => {
    const num = new InteiroMatematico(0);
    // Matematicamente, 0 possui infinitos divisores. Na computação, deve-se tratar
    // para evitar loop infinito. Normalmente retorna-se 0 ou lança-se exceção.
    expect(num.numeroDeDivisores()).toBe(0);
});

Deno.test("Ex 03 - numeroDeDivisores: Tratamento indireto de número negativo via módulo", () => {
    const num = new InteiroMatematico(-4); 
    // Vira 4 -> Divisores: 1, 2, 4
    expect(num.numeroDeDivisores()).toBe(3);
});
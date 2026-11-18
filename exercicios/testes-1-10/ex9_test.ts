import { expect } from "jsr:@std/expect";
import InteiroMatematico from "./InteiroMatematico.ts";

Deno.test("Ex 09 - tribonacci: Sucesso com n = 6", () => {
    const num = new InteiroMatematico(6);
    expect(num.tribonacci()).toBe(13); 
    // Exemplo da sequência: 1, 1, 2, 4, 7, 13
});

Deno.test("Ex 09 - tribonacci: Casos limites iniciais (n = 1, 2, 3)", () => {
    expect(new InteiroMatematico(1).tribonacci()).toBe(1);
    expect(new InteiroMatematico(2).tribonacci()).toBe(1);
    expect(new InteiroMatematico(3).tribonacci()).toBe(2);
});

Deno.test("Ex 09 - tribonacci: Situação de erro/borda com n = 0", () => {
    const num = new InteiroMatematico(0);
    expect(num.tribonacci()).toBe(-1); 
    // Tratar erro de mesma forma ao Fibonacci
});

Deno.test("Ex 09 - tribonacci: Sucesso com n = 7", () => {
    const num = new InteiroMatematico(7);
    expect(num.tribonacci()).toBe(24);
});

Deno.test("Ex 09 - tribonacci: Sucesso com n = 10", () => {
    const num = new InteiroMatematico(10);
    expect(num.tribonacci()).toBe(149);
});
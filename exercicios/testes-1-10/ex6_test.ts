import { expect } from "jsr:@std/expect";
import InteiroMatematico from "./InteiroMatematico.ts";

Deno.test("Ex 06 - fatorial: Sucesso com número padrão (5!)", () => {
    const num = new InteiroMatematico(5);
    expect(num.fatorial()).toBe(120);
});

Deno.test("Ex 06 - fatorial: Caso limite com n = 1", () => {
    const num = new InteiroMatematico(1);
    expect(num.fatorial()).toBe(1);
});

Deno.test("Ex 06 - fatorial: Caso limite com n = 0", () => {
    const num = new InteiroMatematico(0);
    expect(num.fatorial()).toBe(1); 
    // 0! é definido matematicamente como 1
});

Deno.test("Ex 06 - fatorial: Sucesso com n = 3", () => {
    const num = new InteiroMatematico(3);
    expect(num.fatorial()).toBe(6);
});

Deno.test("Ex 06 - fatorial: Garantia de execução iterativa com número maior", () => {
    const num = new InteiroMatematico(10);
    expect(num.fatorial()).toBe(3628800);
});
import { expect } from "jsr:@std/expect";
import InteiroMatematico from "./InteiroMatematico.ts";

Deno.test("Ex 08 - fibonacci: Sucesso com n = 6", () => {
    const num = new InteiroMatematico(6);
    expect(num.fibonacci()).toBe(8); 
    // Exemplo do enunciado
});

Deno.test("Ex 08 - fibonacci: Caso limite do primeiro termo (n = 1)", () => {
    const num = new InteiroMatematico(1);
    expect(num.fibonacci()).toBe(1);
});

Deno.test("Ex 08 - fibonacci: Caso limite do segundo termo (n = 2)", () => {
    const num = new InteiroMatematico(2);
    expect(num.fibonacci()).toBe(1);
});

Deno.test("Ex 08 - fibonacci: Situação de erro com n = 0", () => {
    const num = new InteiroMatematico(0);
    expect(num.fibonacci()).toBe(-1); 
    // Exigência: retornar -1 se n=0
});

Deno.test("Ex 08 - fibonacci: Sucesso com termo mais alto (n = 11)", () => {
    const num = new InteiroMatematico(11);
    expect(num.fibonacci()).toBe(89);
});
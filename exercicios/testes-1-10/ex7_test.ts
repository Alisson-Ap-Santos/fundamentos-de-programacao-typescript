import { expect } from "jsr:@std/expect";
import InteiroMatematico from "./InteiroMatematico.ts";

Deno.test("Ex 07 - serieHarmonica: Sucesso com n = 3 termos", () => {
    const num = new InteiroMatematico(3); 
    // 1 + 1/2 + 1/3 = 1.8333...
    expect(num.serieHarmonica()).toBeCloseTo(1.8333);
});

Deno.test("Ex 07 - serieHarmonica: Caso limite com n = 1 termo", () => {
    const num = new InteiroMatematico(1); 
    // H = 1
    expect(num.serieHarmonica()).toBe(1);
});

Deno.test("Ex 07 - serieHarmonica: Situação de erro com n = 0", () => {
    const num = new InteiroMatematico(0); 
    // Sem termos para somar, deve evitar divisão por zero
    expect(num.serieHarmonica()).toBe(0);
});

Deno.test("Ex 07 - serieHarmonica: Sucesso com n = 2 termos", () => {
    const num = new InteiroMatematico(2); 
    // 1 + 1/2 = 1.5
    expect(num.serieHarmonica()).toBe(1.5);
});
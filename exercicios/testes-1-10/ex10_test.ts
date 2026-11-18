import { expect } from "jsr:@std/expect";
import InteiroMatematico from "./InteiroMatematico.ts";

Deno.test("Ex 10 - isTriangular: Teste com número triangular (6)", () => {
    const num = new InteiroMatematico(6); 
    // 1 * 2 * 3
    expect(num.isTriangular()).toBe(true);
});

Deno.test("Ex 10 - isTriangular: Teste com número triangular maior (24)", () => {
    const num = new InteiroMatematico(24); 
    // 2 * 3 * 4
    expect(num.isTriangular()).toBe(true);
});

Deno.test("Ex 10 - isTriangular: Teste com número não triangular (10)", () => {
    const num = new InteiroMatematico(10);
    expect(num.isTriangular()).toBe(false);
});

Deno.test("Ex 10 - isTriangular: Caso limite/erro com n = 0", () => {
    const num = new InteiroMatematico(0);
    expect(num.isTriangular()).toBe(false); 
    // Evitar loops ou passos desnecessários
});

Deno.test("Ex 10 - isTriangular: Caso limite com n = 1", () => {
    const num = new InteiroMatematico(1);
    expect(num.isTriangular()).toBe(false);
});

Deno.test("Ex 10 - isTriangular: Retorno deve ser do tipo numérico (boolean)", () => {
    const num = new InteiroMatematico(4);
    expect(typeof num.isTriangular()).toBe("boolean");
});
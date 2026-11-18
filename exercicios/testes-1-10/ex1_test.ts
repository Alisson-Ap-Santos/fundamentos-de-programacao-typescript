import { expect } from "jsr:@std/expect";
import InteiroMatematico from "./InteiroMatematico.ts";

Deno.test("Ex 01 - Construtor: Sucesso com valor positivo", () => {
    const num = new InteiroMatematico(5);
    expect(num.getValor()).toBe(5);
});

Deno.test("Ex 01 - Construtor: Caso de borda com zero", () => {
    const num = new InteiroMatematico(0);
    expect(num.getValor()).toBe(0);
});

Deno.test("Ex 01 - Construtor: Situação de erro/módulo com valor negativo", () => {
    const num = new InteiroMatematico(-9);
    expect(num.getValor()).toBe(9);
});

Deno.test("Ex 01 - Setter: Modificação para valor positivo", () => {
    const num = new InteiroMatematico(3);
    num.setValor(12);
    expect(num.getValor()).toBe(12);
});

Deno.test("Ex 01 - Setter: Situação de erro/módulo com modificação negativa", () => {
    const num = new InteiroMatematico(3);
    num.setValor(-15);
    expect(num.getValor()).toBe(15);
});
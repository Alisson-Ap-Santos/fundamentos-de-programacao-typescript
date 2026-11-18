import { expect } from "jsr:@std/expect";
import InteiroMatematico from "./InteiroMatematico.ts";

Deno.test("Ex 05 - elevado: Sucesso com potência padrão", () => {
    const num = new InteiroMatematico(2);
    expect(num.elevado(3)).toBe(8);
});

Deno.test("Ex 05 - elevado: Caso limite com expoente igual a 1", () => {
    const num = new InteiroMatematico(5);
    expect(num.elevado(1)).toBe(5);
});

Deno.test("Ex 05 - elevado: Situação de erro com expoente igual a 0", () => {
    const num = new InteiroMatematico(5);
    expect(num.elevado(0)).toBe(0); 
    // Regra explícita do enunciado: se expoente <= 0 retorna 0
});

Deno.test("Ex 05 - elevado: Situação de erro com expoente negativo", () => {
    const num = new InteiroMatematico(5);
    expect(num.elevado(-3)).toBe(0); 
    // Regra explícita: se expoente <= 0 retorna 0
});

Deno.test("Ex 05 - elevado: Caso de simplificação 0^0", () => {
    const num = new InteiroMatematico(0);
    expect(num.elevado(0)).toBe(0); 
    // Desconsiderado indeterminação, cai na regra <= 0
});
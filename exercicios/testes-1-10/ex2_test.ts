import { expect } from "jsr:@std/expect";
import InteiroMatematico from "./InteiroMatematico.ts";

Deno.test("Ex 02 - tabuada: Sucesso com número padrão", () => {
    const num = new InteiroMatematico(5);
    expect(num.tabuada()).toContain("5 x 1 = 5");
    expect(num.tabuada()).toContain("5 x 10 = 50");
});

Deno.test("Ex 02 - tabuada: Caso de borda com n = 1", () => {
    const num = new InteiroMatematico(1);
    expect(num.tabuada()).toContain("1 x 1 = 1");
    expect(num.tabuada()).toContain("1 x 10 = 10");
});

Deno.test("Ex 02 - tabuada: Comportamento com n = 0", () => {
    const num = new InteiroMatematico(0);
    expect(num.tabuada()).toContain("0 x 1 = 0");
    expect(num.tabuada()).toContain("0 x 10 = 0");
});
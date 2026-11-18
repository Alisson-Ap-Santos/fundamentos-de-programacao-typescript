import { expect } from "jsr:@std/expect";
import InteiroMatematico from "./InteiroMatematico.ts";

Deno.test("Ex 04 - produtoPelaSoma: Sucesso com multiplicandos padrão", () => {
  const num = new InteiroMatematico(10);
  expect(num.produtoPelaSoma(2)).toBe(20);
});

Deno.test(
  "Ex 04 - produtoPelaSoma: Situação de erro/borda com parâmetro m negativo",
  () => {
    const num = new InteiroMatematico(10);
    expect(num.produtoPelaSoma(-2)).toBe(20);
    // m deve ser considerado em módulo, ou seja 2
  },
);

Deno.test("Ex 04 - produtoPelaSoma: Multiplicação por zero (m = 0)", () => {
  const num = new InteiroMatematico(10);
  expect(num.produtoPelaSoma(0)).toBe(0);
});

Deno.test(
  "Ex 04 - produtoPelaSoma: Multiplicação quando o estado n = 0",
  () => {
    const num = new InteiroMatematico(0);
    expect(num.produtoPelaSoma(5)).toBe(0);
  },
);

Deno.test(
  "Ex 04 - produtoPelaSoma: Otimização (menor como multiplicador)",
  () => {
    const num = new InteiroMatematico(2);
    expect(num.produtoPelaSoma(1000)).toBe(2000); // Deve rodar apenas duas vezes no laço
  },
);

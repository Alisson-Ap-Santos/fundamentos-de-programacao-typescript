export default class Automovel {
  public readonly capacidadeTanque: number;
  private quantidadeCombustivel: number;

  constructor(capacidadeTanque: number) {
    this.capacidadeTanque = capacidadeTanque;
    this.quantidadeCombustivel = 0;
  }

  completaTanque() {
    this.quantidadeCombustivel = this.capacidadeTanque;
  }

  abastecer(litros: number) {
    this.quantidadeCombustivel = Math.min(
      this.capacidadeTanque,
      this.quantidadeCombustivel + litros,
    );
  }
  public getCombustivel(): number {
    return this.quantidadeCombustivel;
  }

  public getPercentualAbastecimento(): number {
    return (this.quantidadeCombustivel / this.capacidadeTanque) * 100;
  }

  public toString(): string {
    return (
      "Quantidade de combustível: " +
      this.quantidadeCombustivel.toFixed(1) +
      " litros\n" +
      "Capacidade do tanque: " +
      this.capacidadeTanque.toFixed(1) +
      "litros\n" +
      "Percentual de abastecimento: " +
      this.getPercentualAbastecimento().toFixed(1) +
      "%\n"
    );
  }
}

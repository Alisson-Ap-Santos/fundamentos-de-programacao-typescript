export default class Produto {
  descricao: string;
  private valor: number;
  private quantidade: number;

  public constructor(descricao: string, valor: number, quantidade: number) {
    this.descricao = descricao;
    this.valor = valor;
    this.quantidade = quantidade;
  }

  public calcularValorTotal(): number {
    return this.valor * this.quantidade;
  }
}

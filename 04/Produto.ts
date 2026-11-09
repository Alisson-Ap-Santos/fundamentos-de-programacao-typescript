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

  public adicionarEstoque(quantidade: number) {
    if (quantidade > 0){
  this.quantidade += quantidade;}

  }

  public retirarEstoque(quantidade: number) {
if ((quantidade > 0) && (quantidade <= this.quantidade)) {
    this.quantidade -= quantidade;  }

  }

  public getQuantidade(): number{
    return this.quantidade;
  }
}

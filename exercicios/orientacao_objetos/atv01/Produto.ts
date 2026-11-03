export default class Produto {
  descricao: string;
  peso: number;
  preco: number;

  public constructor() {
    this.descricao = "Barra de Chocolate Diamante Negro";
    this.peso = 0.09;
    this.preco = 5.99;
  }

  public gerarEtiqueta(): string {
    const precoPorQuilo = this.preco / this.peso;

    return (
      "- - - - - - - - - - - - - - - - - - - -\n" +
      this.descricao +
      "\n\n" +
      "Peso: " +
      this.peso.toFixed(3).replace(".", ",") +
      " kg\n\n" +
      "Preço: R$ " +
      this.preco.toFixed(2).replace(".", ",") +
      "\n\n" +
      "Preço do quilo: R$ " +
      precoPorQuilo.toFixed(2).replace(".", ",") +
      "\n" +
      "- - - - - - - - - - - - - - - - - - - -"
    );
  }
}

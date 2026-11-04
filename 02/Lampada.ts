export default class Lampada {
  nome: string;
  estado: boolean;

  public constructor(nome: string) {
    this.nome = nome;
    this.estado = false;
  }

  public ligar() {
    this.estado = true;
  }

  public desligar() {
    this.estado = false;
  }

  public toString() {
    if (this.estado == true) {
      return "Lampada: " + this.nome + "\n" + "estado: Ligada" + "\n";
    } else {
      return "Lampada: " + this.nome + "\n" + "estado: Desligada" + "\n";
    }
  }
}

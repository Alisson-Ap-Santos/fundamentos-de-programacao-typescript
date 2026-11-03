export default class Dado {
  readonly FACES: number;
  private sorteado: number;

  public constructor(faces: number) {
    this.FACES = faces;
    this.proximaJogada();

    /*
     alternativas:
     (1) sorteado = FACES;
         considera o valor máximo daquele dado
     (2) sorteado = 1;
         começa sempre com a face 1 para cima
     */
  }

  public proximaJogada(): number {
    this.sorteado = Math.ceil(Math.random() * this.FACES);
    return this.sorteado;
  }

  public ultimaJogada(): number {
    return this.sorteado;
  }
}
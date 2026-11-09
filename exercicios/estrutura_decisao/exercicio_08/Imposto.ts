export default class Imposto {
  private renda: number;
  aliquota: number;

  public constructor(renda: number) {
    this.renda = renda;
    this.aliquota = 0;
  }

  public calculaImposto() {
    if (this.renda >= 12.571 && this.renda <= 50.270) {
      this.aliquota = 20;
    } else if (this.renda >= 50.271 && this.renda <= 125.140) {
      this.aliquota = 40;
    } else if (this.renda > 125.140) {
      this.aliquota = 45;   
    }
    else {
      return 0;
    }
    return this.calculo();
  }

  public calculo(): number {
   return ((this.renda - 12.570) * this.aliquota) / 100;
  }
}

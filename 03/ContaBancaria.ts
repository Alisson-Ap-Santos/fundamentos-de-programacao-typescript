export default class ContaBancaria {
  titular: string;
  private saldo: number;

  public constructor(titular: string) {
    this.titular = titular;
    this.saldo = 0;
  }

  public depositar(valor: number) {
    this.saldo += valor;
  }

  public getSaldo(): number {
    return this.saldo;
  }
}

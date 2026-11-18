export default class Passagem {
private gastos: number;
private preco: number;

public constructor(gastos: number, preco: number) {
    this.gastos = gastos;
    this.preco = preco;
}

calculoPassagem() {
    let percentual: number = 0;
    if (this.gastos > 0 && (this.gastos <= 1000)){
    percentual = 5;
    }
    else if (this.gastos > 1000 && (this.gastos <= 2000)) {
        percentual = 10;
    }
    else if (this.gastos > 2000 && (this.gastos <= 5000)) {
        percentual = 20;
    }
    else if (this.gastos > 5000 && (this.gastos<= 10000)) {
        percentual = 35;
    }
    else if (this.gastos > 10000) {
        percentual = 50;
    }
    else {
        percentual = 0;
    }
   return this.calculo(percentual);
}
public calculo(valor: number): number {
    return this.preco - (this.preco * (valor / 100));
}

}
export default class Termostato {
private temperatura:  number;

public constructor() {
    this.temperatura = 0;
}

public aumentarTemperatura(valor: number): void {
    if (valor != 0) {
this.temperatura += valor;
}
}

public diminuirTemperatura(valor: number): void{
    if (valor != 0) {
        this.temperatura -= valor;
    }
}

public estaAcimaDe(valor: number): boolean {
     return valor < this.temperatura;
}

public getTemperatura(): number {
    return this.temperatura;
}

}
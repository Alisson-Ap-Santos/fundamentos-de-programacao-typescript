export default class Estoque {
private quantidade: number;

public constructor(quantidade: number) {
this.quantidade = quantidade;
}

public adicionar(valor: number): void {
if(valor > 0) {
    this.quantidade += valor;}
}

public retirar(valor: number): void {
    if(valor > 0 && (valor <= this.quantidade)) {

    this.quantidade -= valor;}
}

public temDisponibilidade(valor: number): boolean {
return valor > 0 && valor <= this.quantidade;
}

public getQuantidade(): number {
    return this.quantidade;
}

}
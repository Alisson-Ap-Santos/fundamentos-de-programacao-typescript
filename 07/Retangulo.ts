export default class Retangulo {
private largura: number;
private altura: number;


public constructor(largura: number, altura: number) {
this.largura = largura;
this.altura = altura;

}

public calculaArea(): number {
    return this.largura * this.altura;
}

public calculaPerimetro(): number {
return 2 * (this.largura + this.altura);
}





}
export default class ContaBancaria {
private titular: string;
private saldo: number;

public constructor(titular: string) {
    this.titular = titular;
    this.saldo = 0;
}

public depositar(valor: number) {
    if (valor > 0){
        this.saldo += valor;
    }
}

public saque(valor: number) {
if (valor > 0 && (valor <= this.saldo)){
this.saldo -= valor;
} 

}

public getSaldo(): number {
 return this.saldo;
}


}
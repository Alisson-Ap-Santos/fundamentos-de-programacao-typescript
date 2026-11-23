export default class PrimoEficiente {
public num: number;

public constructor (num: number) {
    this.num = num;
}

isPrimo(): boolean{
    if (this.num < 2) {
        return false; // false indica que o numero nao é primo
    }

    for (let i = 2; i <= Math.sqrt(this.num); i++) {
        if (this.num % i == 0) {
            return false;
        }
    }

    return true;
}
}
/*menorDivisor()
Retorne o menor divisor de n, exceto 1. Se n = 0,  ou n = 1, retorne 1. Caso n = 24, por exemplo, 
deve-se retornar 2.*/


export default class MenorDivisor {

    public menorDivisor(n: number): number {

        if (n === 0 || n === 1) {
            return 1;
        }

        for (let i = 2; i <= n; i++) {
            if (n % i === 0) {
                return i;
            }
        }

        return 1;
    }
}


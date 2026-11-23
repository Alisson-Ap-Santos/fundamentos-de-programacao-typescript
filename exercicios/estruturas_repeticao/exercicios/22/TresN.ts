/* Suponha um número n qualquer, se n é par então n agora é n/2, se n é ímpar, n agora é 3*n+1. Assim 
para n = 3, calculamos a seguinte tabela:
 3 ► 10 4 ► 2
10 ►  52 ► 1
 5 ► 16 1 ► 4
16 ►  8 4 ► 2
 8 ►  4 2 ► 1
Observe que a partir da sétima iteração, a sequência 4 2 1 começa a se repetir. Calcule e retorne, 
para n, o número de iterações para se chegar ao primeiro 1.*/


class TresN {

    public tresN(n: number): number {

        let iteracoes = 0;

        while (n !== 1) {

            if (n % 2 === 0) {
                n = n / 2;
            } else {
                n = 3 * n + 1;
            }

            iteracoes++;
        }

        return iteracoes;
    }
}

export { TresN };

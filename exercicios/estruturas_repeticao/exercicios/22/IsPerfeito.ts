
export default class Perfeito {

    public isPerfeito(n: number): number {

        if (n <= 0) {
            return 1;
        }

        let soma = 0;

        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                soma += i;
            }
        }

        if (soma < n) {
            return -1;
        } else if (soma === n) {
            return 0;
        } else {
            return 1;
        }
    }
}


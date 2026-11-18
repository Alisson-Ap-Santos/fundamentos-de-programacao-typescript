
class PainelContador {
    private limiteInferior: number;
    private limiteSuperior: number;

    // Construtor
    constructor(limiteInferior: number, limiteSuperior: number) {
        this.limiteInferior = limiteInferior;
        this.limiteSuperior = limiteSuperior;
        this.validarLimites();
    }

    // Validação dos limites
    private validarLimites(): void {
        if (this.limiteSuperior < this.limiteInferior) {
            const auxiliar = this.limiteInferior;
            this.limiteInferior = this.limiteSuperior;
            this.limiteSuperior = auxiliar;
        }
    }

    // Acessores
    public getLimiteInferior(): number {
        return this.limiteInferior;
    }

    public getLimiteSuperior(): number {
        return this.limiteSuperior;
    }

    // Modificadores
    public setLimiteInferior(valor: number): void {
        this.limiteInferior = valor;
        this.validarLimites();
    }

    public setLimiteSuperior(valor: number): void {
        this.limiteSuperior = valor;
        this.validarLimites();
    }

    // Exercício 2 - Contagem crescente
    public contagem(): void {
        for (let i = this.limiteInferior; i <= this.limiteSuperior; i++) {
            console.log(i);
        }
    }

    // Exercício 3 - Contagem decrescente
    public contagemDecrescente(): void {
        for (let i = this.limiteSuperior; i >= this.limiteInferior; i--) {
            console.log(i);
        }
    }

    // Exercício 4 - Contagem de pares
    public contagemPares(): void {
        for (let i = this.limiteInferior; i <= this.limiteSuperior; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    }

    // Exercício 5 - Contagem de ímpares
    public contagemImpares(): void {
        for (let i = this.limiteInferior; i <= this.limiteSuperior; i++) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    }

    // Exercício 6 - Contagem por passo
    public contagemPasso(passo: number): void {
        if (passo <= 0) {
            console.log("O passo deve ser positivo.");
            return;
        }

        for (let i = this.limiteInferior; i <= this.limiteSuperior; i += passo) {
            console.log(i);
        }
    }

    // Exercício 7 - Contagem omitindo múltiplos
    public contagemOmitindo(numero: number): void {
        if (numero === 0) {
            console.log("O número não pode ser zero.");
            return;
        }

        for (let i = this.limiteInferior; i <= this.limiteSuperior; i++) {
            if (i % numero === 0) {
                console.log("*");
            } else {
                console.log(i);
            }
        }
    }
}

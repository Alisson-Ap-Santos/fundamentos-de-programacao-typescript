    export default class Pessoa {
    private nome: string;
    private idade: number;


    public constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
    }

    public saudacao(): string {
    return "Olá " + this.nome;
    }

    public apresentarPessoa(pessoa: Pessoa): string {
    return "Olá " + pessoa.getNome() + ", eu me chamo " + this.nome;
    }

    public getNome(): string{
    return this.nome;
    }

public getIdade(): number {
    return this.idade;
}

    }
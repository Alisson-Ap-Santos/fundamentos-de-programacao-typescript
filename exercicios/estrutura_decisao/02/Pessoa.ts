export default class Pessoa {
private idade: number;

public constructor(idade: number) {
this.idade =  idade;
}

public ehMaiorDeIdade(): boolean {
   return this.idade >= 18;
}


}
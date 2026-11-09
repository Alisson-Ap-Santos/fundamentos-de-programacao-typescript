export default class ClassificadorIdade {

private idade: number;

public constructor(idade: number) {
this.idade = idade;

}

public classificar(): string {
if (this.idade < 12){
    return "criança";
}
else if (this.idade >= 12 && (this.idade <= 17)){
    return "Adolescente";
}
else {
    return "Adulto";
}
}


}
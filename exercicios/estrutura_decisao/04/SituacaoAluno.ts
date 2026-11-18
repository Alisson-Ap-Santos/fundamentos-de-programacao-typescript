export default class SituacaoAlunos {
private nota: number;
private frequencia: number;

public constructor(nota: number, frequencia: number) {
this.nota = nota;
this.frequencia = frequencia;

}

public verificarSituacao() {
    if (this.nota >= 6 && (this.frequencia >= 75)) {
    return "Aprovado";
    }
    else if (this.nota >= 4 && (this.frequencia >= 75)){
        return "Exame";
    }
    else {
        return "Reprovado";
    }
}


}
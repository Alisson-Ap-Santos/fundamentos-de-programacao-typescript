export default class Aluno {
  nome: string;
  curso: string;
  semestre: number;

  public constructor(nome: string, curso: string, semestre: number) {
    this.nome = nome;
    this.curso = curso;
    this.semestre = semestre;
  }

  public toString(): string {
    return (
      "nome: " +
      this.nome +
      "\n" +
      "curso: " +
      this.curso +
      "\n" +
      "semestre: " +
      this.semestre
    );
  }
}

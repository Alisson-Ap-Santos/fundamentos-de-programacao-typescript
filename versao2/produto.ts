export default class Produto {

 descricao: string;
 valor: number;

 //cuidado isso fere o encapsulamento!!!

 public constructor() {
    this.descricao = "Descrição de exemplo";
    this.valor = 0;
 }
    
}
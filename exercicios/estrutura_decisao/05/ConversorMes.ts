export default class ConversorMes {
private mes: number;

public constructor(mes: number) {
    this.mes = mes;
}

public obterNomeMes(): string {
switch(this.mes) {
case 1:
   return "Janeiro";

case 2:
    return "Fevereiro";
    
case 3:
    return "Março";

case 4:
    return "Abril";

case 5:
    return "Maio";
 

case 6:
    return "Junho";
   

    default:
    return "insira um valor de 1 a 6";
   
}



}


}
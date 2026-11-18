export default class InteiroMatematico {
  private n: number;

  constructor(n: number) {
    this.setN(n);
  }

  public setN(n: number): void {
    this.n = this.modulo(n);
    // Requisito de não usar classes externas
  }

  public modulo(n: number): number {
    if (n < 0)
      n = -n;

    return n;
  }

  public getN(): number {
    return this.n;
  }

  public tabuada(): string {
    let aux: string = "";

    for (let i = 0; i <= 10; i++)
      aux += this.n + " x " 
             + i + " = " 
             + (this.n * i) + "\n";

    return aux;
  }

  public produtoPelaSoma(m: number) {
    if ((m == 0) || (this.n == 0))
      return 0;

    // Do contrário, perde-se o valor do atributo
    // caso a troca de N com M seja necessária
    let n: number = this.n;
    m = this.modulo(m);

    if (n > m) {
      let aux: number = n;
      n = m;
      m = aux;
    }

    let resultado: number = m;

    for (let i = 2; i <= n; i++)
      resultado += m;

    return resultado;
  }

  public elevado(expoente: number): number {
    if ((this.n == 0) || (expoente <= 0))
      return 0;

    if (this.n == 1)
      return 1;

    let potencia: number = 1;
    while (expoente > 0) {
      potencia = potencia * this.n;
      expoente--;
    }

    return potencia;
  }

  public elevadoComFor(expoente: number): number {
    if ((this.n == 0) || (expoente <= 0))
      return 0;

    if (this.n == 1)
      return 1;

    let potencia: number = 1;
    for (let i = 1; i <= expoente; i++)
      potencia = potencia * this.n;

    return potencia;

    /*
     É um problema de contagem:

     10^4 = 10 x 10 x 10 x 10
             1    2    3    4

     2^5 = 2 x 2 x 2 x 2 x 2
           1   2   3   4   5

     0^100 = 0 x 0 x 0 x ... x 0   = 0
             1   2   3         100

     1^100 = 1 x 1 x 1 x ... x 1   = 1
             1   2   3         100

     - - -

     Exemplo, considerando 2ˆ5:
     n = 2
     expoente = 5
     potencia = 1

     Contagem de 1 até 5:
     - para i = 1, potencia =  1 * 2 = 2
     - para i = 2, potencia =  2 * 2 = 4
     - para i = 3, potencia =  4 * 2 = 8
     - para i = 4, potencia =  8 * 2 = 16
     - para i = 5, potencia = 16 * 2 = 32
     - para i = 6, abandona o FOR

     return 32;
     */
  }

  public fibonacci(): number
  {
    if (this.n == 0)
      return -1;   // indicativo de erro

    if (this.n < 3)
      return 1;

    let a: number = 1, b: number = 1, c: number = 0;

    for (let i = 3; i <= this.n; i++) {
      c = a + b;
      // Para observar os elementos em teste
      // console.log(c);

      a = b;
      b = c;
    }

    return c;
  }

  public isTriangular(): boolean {
    let multi: number = 0, i: number = 1;

    // É um problema de contagem?
    while (multi < this.n) {
      multi = i * (i + 1) * (i + 2);
      i++;
    }

    return (multi == this.n);
    // Se multi == n, o número é triangular
    // Caso contrário, ou seja, se multi > n, o número não é triangular
  }
}
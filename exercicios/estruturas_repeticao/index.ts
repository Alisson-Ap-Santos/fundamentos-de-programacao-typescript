export default class Triangular {
    // Removido o "let" do corpo da classe
    public n: number = 110; 

    public isTriangular(): boolean {
        let mult: number = 0, i: number = 1;

        while (mult < this.n) {
            mult = (i * (i + 1)) / 2;
            i++;
        }

        return (mult === this.n);
    }
}
export default class PrimoEficiente {
public num: number;

public constructor (num: number) {
    this.num = num;
}

isPrimo() {
if (this.num < 2) {
  return false;
}
for(let i = 2; i < this.num; i++){
if(this.num % i == 0) {
return false;
}
}
return true;
}

}
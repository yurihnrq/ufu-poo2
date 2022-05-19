import A from './A';

export default class C extends A {
  public m1() {
    console.log('Algoritmo 1 classe C');
  }

  public m2(param?: string): void {
    console.log('Algoritmo 3 classe C. Param: ' + param);
  }
}

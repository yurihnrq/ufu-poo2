import A from './A';

export default class D extends A {
  public m1(param?: string) {
    console.log('Algoritmo 4 classe D. Param: ' + param);
  }

  public m2() {
    console.log('Algoritmo 2 classe D');
  }
}

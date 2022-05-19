import Alg1 from './MyStrategy/ConcreteStrategy/Alg1';
import Alg2 from './MyStrategy/ConcreteStrategy/Alg2';
import Method1 from './MyStrategy/Method1';
import Method2 from './MyStrategy/Method2';

export default class A {
  #method1: Method1;
  #method2: Method2;
  #number: number;

  constructor(number?: number) {
    this.#number = number ?? 0;
    this.#method1 = new Alg1();
    this.#method2 = new Alg2();
  }

  public m1() {
    // Agora este método delega a responsabilidade.
    this.#method1.method();
  }

  public m2() {
    // Agora este método delega a responsabilidade.
    this.#method2.method();
  }

  public set method1(method: Method1) {
    this.#method1 = method;
  }

  public set method2(method: Method2) {
    this.#method2 = method;
  }

  public get number(): number {
    return this.#number;
  }
}

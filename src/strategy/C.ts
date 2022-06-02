import A from './A';
import Alg1 from './MyStrategy/ConcreteStrategy/Alg1';
import Alg3 from './MyStrategy/ConcreteStrategy/Alg3';

export default class C extends A {
  constructor() {
    super();
    this.method1 = new Alg1();
    this.method2 = new Alg3();
  }
}

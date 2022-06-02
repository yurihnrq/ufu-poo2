import A from './A';
import Alg2 from './MyStrategy/ConcreteStrategy/Alg2';
import Alg4 from './MyStrategy/ConcreteStrategy/Alg4';

export default class D extends A {
  constructor() {
    super();
    this.method1 = new Alg4();
    this.method2 = new Alg2();
  }
}

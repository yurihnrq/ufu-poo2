import A from './A';
import Alg1 from './MyStrategy/ConcreteStrategy/Alg1';
import Alg2 from './MyStrategy/ConcreteStrategy/Alg2';

export default class B extends A {
  // method1 da classe A delegava para Alg1(),
  // entretanto, com facilidade, conseguimos fazer
  // com que method1 da classe B delegue para Alg4().
  constructor() {
    super();
    this.method1 = new Alg1();
    this.method2 = new Alg2();
  }
}

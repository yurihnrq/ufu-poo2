import A from './A';
import Alg3 from './MyStrategy/ConcreteStrategy/Alg3';

const ObjA: A = new A();

console.log('ObjA.m1()');
ObjA.m1();
console.log('ObjA.m2()');
ObjA.m2();

ObjA.method1 = new Alg3();
console.log('Mudando em tempo de execução o algoritmo de execução...');
console.log('ObjA.m1()');
ObjA.m1();

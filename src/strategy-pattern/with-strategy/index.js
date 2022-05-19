"use strict";
exports.__esModule = true;
var A_1 = require("./A");
var Alg3_1 = require("./MyStrategy/ConcreteStrategy/Alg3");
var ObjA = new A_1["default"]();
console.log('ObjA.m1()');
ObjA.m1();
console.log('ObjA.m2()');
ObjA.m2();
ObjA.method1 = new Alg3_1["default"]();
console.log('Mudando em tempo de execução o algoritmo de execução...');
console.log('ObjA.m1()');
ObjA.m1();

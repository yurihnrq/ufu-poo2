var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _A_method1, _A_method2, _A_number;
import Alg1 from './AbstractAlg/Alg/Alg1';
import Alg2 from './AbstractAlg/Alg/Alg2';
export default class A {
    constructor(number) {
        _A_method1.set(this, void 0);
        _A_method2.set(this, void 0);
        _A_number.set(this, void 0);
        __classPrivateFieldSet(this, _A_number, number !== null && number !== void 0 ? number : 0, "f");
        this.method1 = new Alg1();
        this.method2 = new Alg2();
    }
    m1() {
        // Agora este método delega a responsabilidade.
        __classPrivateFieldGet(this, _A_method1, "f").method();
    }
    m2() {
        // Agora este método delega a responsabilidade.
        __classPrivateFieldGet(this, _A_method2, "f").method();
    }
    set method1(method) {
        __classPrivateFieldSet(this, _A_method1, method, "f");
    }
    set method2(method) {
        __classPrivateFieldSet(this, _A_method2, method, "f");
    }
    get number() {
        return __classPrivateFieldGet(this, _A_number, "f");
    }
}
_A_method1 = new WeakMap(), _A_method2 = new WeakMap(), _A_number = new WeakMap();

"use strict";
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
exports.__esModule = true;
var Alg1_1 = require("./MyStrategy/ConcreteStrategy/Alg1");
var Alg2_1 = require("./MyStrategy/ConcreteStrategy/Alg2");
var A = /** @class */ (function () {
    function A(number) {
        _A_method1.set(this, void 0);
        _A_method2.set(this, void 0);
        _A_number.set(this, void 0);
        __classPrivateFieldSet(this, _A_number, number !== null && number !== void 0 ? number : 0, "f");
        __classPrivateFieldSet(this, _A_method1, new Alg1_1["default"](), "f");
        __classPrivateFieldSet(this, _A_method2, new Alg2_1["default"](), "f");
    }
    A.prototype.m1 = function () {
        // Agora este método delega a responsabilidade.
        __classPrivateFieldGet(this, _A_method1, "f").method();
    };
    A.prototype.m2 = function () {
        // Agora este método delega a responsabilidade.
        __classPrivateFieldGet(this, _A_method2, "f").method();
    };
    Object.defineProperty(A.prototype, "method1", {
        set: function (method) {
            __classPrivateFieldSet(this, _A_method1, method, "f");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(A.prototype, "method2", {
        set: function (method) {
            __classPrivateFieldSet(this, _A_method2, method, "f");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(A.prototype, "number", {
        get: function () {
            return __classPrivateFieldGet(this, _A_number, "f");
        },
        enumerable: false,
        configurable: true
    });
    return A;
}());
exports["default"] = A;
_A_method1 = new WeakMap(), _A_method2 = new WeakMap(), _A_number = new WeakMap();

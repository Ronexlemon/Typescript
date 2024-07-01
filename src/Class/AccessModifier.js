//Private, public, protected
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var _Modifier_name;
var Modifier = /** @class */ (function () {
    function Modifier(_name) {
        //a private field using  ECMAScript private fields
        _Modifier_name.set(this, void 0);
        __classPrivateFieldSet(this, _Modifier_name, _name, "f");
    }
    Modifier.prototype.readName = function () {
        console.log("the name is", __classPrivateFieldGet(this, _Modifier_name, "f"));
    };
    return Modifier;
}());
_Modifier_name = new WeakMap();
var Private = /** @class */ (function () {
    function Private(_name) {
        this.name = _name;
    }
    Private.prototype.readName = function () {
        console.log("the name is", this.name);
    };
    return Private;
}());
var Person = /** @class */ (function () {
    function Person(_name) {
        this.namee = _name;
    }
    return Person;
}());
var Emplo = /** @class */ (function (_super) {
    __extends(Emplo, _super);
    function Emplo(_name, _department) {
        var _this = _super.call(this, _name) || this;
        _this.department = _department;
        return _this;
    }
    Emplo.prototype.getDetails = function () {
        console.log("the name is", this.namee, "and i work on this department", this.department);
    };
    return Emplo;
}(Person));
var mod = new Modifier("John doe");
var pri = new Private("Doen");
var emp = new Emplo("John doe", "IT");
emp.getDetails();
pri.readName();
mod.readName();

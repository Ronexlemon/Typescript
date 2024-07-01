//Private, public, protected
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
var mod = new Modifier("John doe");
mod.readName();

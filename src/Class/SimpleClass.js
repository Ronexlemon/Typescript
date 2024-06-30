var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello" + this.greeting;
    };
    return Greeter;
}());
var greeeter = new Greeter("John");
console.log(greeeter.greet());

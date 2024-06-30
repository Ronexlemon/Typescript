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
var Animals = /** @class */ (function () {
    function Animals(_name) {
        this.name = _name;
    }
    Animals.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animals;
}());
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(_name) {
        return _super.call(this, _name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("runs...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animals));
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs(_name) {
        return _super.call(this, _name) || this;
    }
    Dogs.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("walks ....");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Dogs;
}(Animals));
var horse = new Horse("horse runs");
horse.move(30);
var dogs = new Dogs("dog walks");
dogs.move(30);

function paintShape(opts) {
    var shape = opts.shape, _a = opts.xPos, xPos = _a === void 0 ? 0 : _a, _b = opts.yPos, yPos = _b === void 0 ? 0 : _b;
    console.log(shape, xPos, yPos);
}
paintShape({ shape: { name: "rectangle", color: "green" }, xPos: 100, yPos: 200 });
paintShape({ shape: { name: "rectangle", color: "green" }, xPos: 200, yPos: 400 });
paintShape({ shape: { name: "rectangle", color: "green" }, xPos: 300, yPos: 600 });
paintShape({ shape: { name: "rectangle", color: "green" }, xPos: 400, yPos: 800 });

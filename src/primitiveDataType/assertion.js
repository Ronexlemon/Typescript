"use strict";
var car = {};
car.milage = 1000;
car.model = "BMW";
car.name = "x6";
console.log(car);
var empl = {};
empl.name = "ronex";
empl.salary = 1000;
var empl2 = [];
empl2.push({ name: "john doe", salary: 1000000 });
///using as keyword
var two = 20202;
var newCode = two;
//
const sum = (sal, nam) => {
    return { name: nam, salary: sal };
};
let a = 0xa;
let myCode = a;
console.log(typeof (myCode));
console.log(typeof (a));
console.log(typeof (newCode));
console.log(a);
console.log(empl);
console.log(empl2);
console.log(sum(100, "lemon"));

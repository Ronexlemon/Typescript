"use strict";
function greeter(fn) {
    fn("hello");
}
function getNum(fn) {
    fn(5);
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
greeter((s) => console.log(s));
getNum((n) => console.log("the number is", n));

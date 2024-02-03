"use strict";
//normal declaration
let fruits = ["melon", "yogo", "orange", "mango"];
let fruits1 = ["melon1", "yogo1", "orange1", "mango1"];
let fruitsPriceArray = ["hello", 1, "yollow", 45];
function getArrayAndReturnAnArray(array) {
    return array;
}
const CallFunctions = () => {
    console.log("Array returned", getArrayAndReturnAnArray(fruits));
    console.log("Array returned", getArrayAndReturnAnArray(fruitsPriceArray));
};
CallFunctions();

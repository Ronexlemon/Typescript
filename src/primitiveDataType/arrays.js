"use strict";
//normal declaration
let fruits = ["melon", "yogo", "orange", "mango"];
let fruits1 = ["melon1", "yogo1", "orange1", "mango1"];
function getArrayAndReturnAnArray(array) {
    return array;
}
const CallFunctions = () => {
    console.log("Array returned", getArrayAndReturnAnArray(fruits));
};
CallFunctions();

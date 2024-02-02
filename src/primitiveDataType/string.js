"use strict";
let personName = { variable: "John Doe" };
let newName;
console.log("Person Name in lowercase:", personName.variable.toLocaleLowerCase());
//typescript function that takes a string
function getName(name) {
    newName = name.variable;
}
function splitString(name) {
    const newSplitString = name.variable.split(" ");
    return newSplitString;
}
function concatTwoStrings({ name1, name2 }) {
    const concatStrings = name1.concat(name2);
    return concatStrings;
}
getName({ variable: "Lemonr" });
console.log("newName", newName);
console.log(`split String at  " "`, splitString({ variable: "Hello There" }));
console.log(`concat two strings`, concatTwoStrings({ name1: "yes", name2: "baanah" }));

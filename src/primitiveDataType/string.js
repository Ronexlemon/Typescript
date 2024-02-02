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
function concatTwoStrings(data) {
    const concatStrings = data.name1.concat(data.name2);
    return concatStrings;
}
function replacePersonName(newPerson) {
    return personName.variable.replace("Doe", newPerson.variable);
}
function checkIfStringIncludes(data) {
    return data.name1.includes(data.name2);
}
getName({ variable: "Lemonr" });
console.log("newName", newName);
console.log(`split String at  " "`, splitString({ variable: "Hello There" }));
console.log(`concat two strings`, concatTwoStrings({ name1: "yes", name2: "baanah" }));
console.log("replace: ", replacePersonName({ variable: "Yes" }));
console.log("data includes inside another one", checkIfStringIncludes({ name1: "I saw , i go, i found", name2: "go" }));

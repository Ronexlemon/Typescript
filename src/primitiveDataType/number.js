"use strict";
let first = 123; // number 
let second = 0x37CF; // hexadecimal
let third = 0o377; // octal
let fourth = 0b111001; // binary  
console.log(first); // 123 
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57 
function returnsPersonDetails(peronaDetails) {
    return `The person Details are:  age: ${peronaDetails.age} , salary: ${peronaDetails.salary}, years: ${peronaDetails.years}`;
}
function getNumberExponential({ num, expo }) {
    return num.toExponential(expo);
}
function getToFixOfANumber({ number, tofix }) {
    return number.toFixed(tofix);
}
const call = () => {
    console.log(returnsPersonDetails({ age: 10, salary: 3000, years: 2023 }));
    console.log(getNumberExponential({ num: 5, expo: 5 }));
    console.log(getToFixOfANumber({ number: 10.948696849, tofix: 4 }));
};
call();

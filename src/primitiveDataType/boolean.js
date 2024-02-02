"use strict";
let vall;
const data = {
    valid: true, salary: 100, place: "NaI"
};
function checkIfValid(data) {
    if (data.valid) {
        vall = true;
    }
    else {
        vall = false;
    }
    return vall;
}
console.log("check if its valid", checkIfValid(data));

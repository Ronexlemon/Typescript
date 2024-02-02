"use strict";
let vall;
function checkIfValid(data) {
    if (data.valid) {
        vall = true;
    }
    else {
        vall = false;
    }
    return vall;
}
console.log("check if its valid", checkIfValid({ valid: true }));

"use strict";
function checkDataType(data_type) {
    if (typeof (data_type) === "number") {
        console.log("yeah the data is a number");
    }
    else if (typeof (data_type) === "string") {
        console.log("yeah the data is a string");
    }
    else if (typeof (data_type) === "object") {
        console.log("yeah the data is an object");
    }
}
checkDataType("man");
checkDataType(1234);
checkDataType({ name: "yollow", salary: 2000, month: "jan" });

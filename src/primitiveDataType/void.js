"use strict";
let names = undefined;
function returnNothing() {
    console.log("returns nothing");
}
function getNothing(data) {
    console.log("get nothing so returns nothing");
}
const CallAllFunction = () => {
    returnNothing();
    getNothing();
};
CallAllFunction();

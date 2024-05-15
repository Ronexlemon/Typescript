//propeties can also be marked as readonly -> a property marked as readonly can't be written to during type-checking
function doSomething(obj) {
    // obj.prop ="fjnfnjf"; => can't be reassign
    return obj.prop;
}
console.log(doSomething({ prop: "yollow" }));

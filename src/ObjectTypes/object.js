console.log("starting");
function greet(person) {
    return "Hello" + person.name + "You're " + person.age + "years old";
}
function greet2(person) {
    return "Hello" + person.name + "You're " + person.age + "years old";
}
function greet3(person) {
    return "Hello" + person.name + "You're " + person.age + "years old";
}
console.log(greet({ name: "john doe", age: 30 }));
console.log(greet2({ name: "john doe", age: 30 }));
console.log(greet3({ name: "john doe", age: 30 }));

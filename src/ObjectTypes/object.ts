interface Person{
    name:string;
    age:number;
}
type Personss ={
    name:string;
    age:number;

}
console.log("starting")

function greet(person: Person){
    return "Hello" + person.name + "You're " + person.age + "years old";
}
function greet2(person: {name:string; age:number}){
    return "Hello" + person.name + "You're " + person.age + "years old";
}

function greet3(person: Personss){
    return "Hello" + person.name + "You're " + person.age + "years old";
}

console.log(greet({name:"john doe",age:30}))
console.log(greet2({name:"john doe",age:30}))
console.log(greet3({name:"john doe",age:30}))
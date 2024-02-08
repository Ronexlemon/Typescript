interface Person{
    age: number;
    name: string;

}

function printPersonDetails(p:Person){
    console.log(`Hello ${p.name} ,you have turned ${p.age} years`);
}

printPersonDetails({age:18,name:"John Doe"})
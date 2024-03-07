interface EmployeeTwo{
    name:string,
    salary:number
}

type EmployeeOne={
    name:string,
    salary:number

}

interface Vehicle{
    name : string,
    model: string,
    milage: number
}

var car = <Vehicle>{}
car.milage=1000;
car.model = "BMW"
car.name= "x6"

console.log(car)

var empl = <EmployeeTwo>{}
empl.name ="ronex"
empl.salary= 1000
var empl2: Array<EmployeeOne> =[]

empl2.push({name:"john doe",salary:1000000});
empl2.push({name:"Ramsey",salary:5000000});




///using as keyword

var two:any = 20202;
var newCode = two as number;

//
const sum =(sal:number,nam:string):EmployeeOne=>{
    return {name:nam,salary:sal}
}



let a:any =0xa;


let myCode = <number> a;

console.log(typeof(myCode))

console.log(typeof(a))
console.log(typeof(newCode))
console.log(a)


console.log(empl)
console.log(empl2)
console.log(sum(100,"lemon"))


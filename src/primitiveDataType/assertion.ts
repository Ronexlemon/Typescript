interface EmployeeTwo{
    name:string,
    salary:number
}

type EmployeeOne={
    name:string,
    salary:number

}

var empl = <EmployeeTwo>{}
empl.name ="ronex"
empl.salary= 1000
var empl2: Array<EmployeeOne> =[]
empl2.push({name:"john doe",salary:1000000});











let a:any =0xa;


let myCode = <number> a;

console.log(typeof(myCode))

console.log(typeof(a))
console.log(a)


console.log(empl)
console.log(empl2)
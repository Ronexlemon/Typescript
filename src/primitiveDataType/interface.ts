interface Person{
    age: number;
    name: string;

}

//interface is extended
interface MoreDetails extends Person{
    salary:number;
    rate : number;
    tax:number;

}
type netPay={
    salary:number;
    tax:number;
}

interface Iemployee{
    empCode:string;
    empName: string;
    getSalary:(arg0: number)=> number|Error;
    getManagerName(arg0:number): string;
}
let salaryGroup: Array<number> = [100000,400000,500000,600000,2000000]
let manageName: string[] = ["john","james","kim","hules","george"]
function printPersonDetails(p:Person){
    console.log(`Hello ${p.name} ,you have turned ${p.age} years`);
}

function getPersonDetailsAndCalculateNetPay(pd:MoreDetails){
    const net = calCulateNetPay({salary:pd.salary,tax:pd.tax});
    console.log(`Welcome ${pd.name} your gross salary is ${pd.salary} , tax ${pd.tax} and netPay ${net}`);

}

function calCulateNetPay(np:netPay):number{
    return (np.salary - np.tax);
}

class Employee implements Iemployee{
    empCode: string;
    empName: string;

    constructor(){
        this.empCode ="RTEDHY"
        this.empName="Lemon"
    }
    getSalary = (arg0: number) =>{
        if(salaryGroup.length >= arg0){
            return salaryGroup[arg0];

        }
        return  new Error("out of range")

        
    }
    getManagerName(arg0: number): string {
        return manageName[arg0];
        
    }
}


const Emp = new Employee();
console.log(`Employee details name: ${Emp.empName} , code : ${Emp.empCode} , emp Manager ${Emp.getManagerName(0)} , emp Salary ${Emp.getSalary(0)}`)

printPersonDetails({age:18,name:"John Doe"})
getPersonDetailsAndCalculateNetPay({name:"hamas",age:20,salary:100000,tax:5000,rate:10})
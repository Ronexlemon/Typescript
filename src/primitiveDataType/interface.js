"use strict";
let salaryGroup = [100000, 400000, 500000, 600000, 2000000];
let manageName = ["john", "james", "kim", "hules", "george"];
function printPersonDetails(p) {
    console.log(`Hello ${p.name} ,you have turned ${p.age} years`);
}
function getPersonDetailsAndCalculateNetPay(pd) {
    const net = calCulateNetPay({ salary: pd.salary, tax: pd.tax });
    console.log(`Welcome ${pd.name} your gross salary is ${pd.salary} , tax ${pd.tax} and netPay ${net}`);
}
function calCulateNetPay(np) {
    return (np.salary - np.tax);
}
class Employee {
    constructor() {
        this.getSalary = (arg0) => {
            if (salaryGroup.length >= arg0) {
                return salaryGroup[arg0];
            }
            return new Error("out of range");
        };
        this.empCode = "RTEDHY";
        this.empName = "Lemon";
    }
    getManagerName(arg0) {
        return manageName[arg0];
    }
}
const Emp = new Employee();
console.log(`Employee details name: ${Emp.empName} , code : ${Emp.empCode} , emp Manager ${Emp.getManagerName(0)} , emp Salary ${Emp.getSalary(0)}`);
printPersonDetails({ age: 18, name: "John Doe" });
getPersonDetailsAndCalculateNetPay({ name: "hamas", age: 20, salary: 100000, tax: 5000, rate: 10 });

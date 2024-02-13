"use strict";
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
            return arg0;
        };
        this.empCode = "RTEDHY";
        this.empName = "Lemon";
    }
}
printPersonDetails({ age: 18, name: "John Doe" });
getPersonDetailsAndCalculateNetPay({ name: "hamas", age: 20, salary: 100000, tax: 5000, rate: 10 });

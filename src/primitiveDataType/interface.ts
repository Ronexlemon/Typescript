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

printPersonDetails({age:18,name:"John Doe"})
getPersonDetailsAndCalculateNetPay({name:"hamas",age:20,salary:100000,tax:5000,rate:10})
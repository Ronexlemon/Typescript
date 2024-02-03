let first:number = 123; // number 
let second: number = 0x37CF;  // hexadecimal
let third:number=0o377 ;      // octal
let fourth: number = 0b111001;// binary  

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57 

type arrayOfNumber ={
    age:number,
    salary:number
    years:number

}


function returnsPersonDetails(peronaDetails:arrayOfNumber){
    return `The person Details are:  age: ${peronaDetails.age} , salary: ${peronaDetails.salary}, years: ${peronaDetails.years}`

}

function getNumberExponential({ num, expo }: { num: number, expo?: number }): string {
    return num.toExponential(expo);
}
function getToLocale({number}:{number:number}):string{
    return number.toLocaleString()
}

function getToFixOfANumber({number,tofix}:{number:number,tofix?:number}):string{
    return number.toFixed(tofix)
}


const call =()=>{
    console.log(returnsPersonDetails({age:10,salary:3000,years:2023}))
    console.log(getNumberExponential({num:5,expo:5}))
    console.log(getToFixOfANumber({number:10.948696849,tofix:4}))
    console.log(getToLocale({number:100000646400.858858}))

}
call()
type DisplayNumFunction = (a:number)=>void

function greeter(fn:(a:string)=>void){
    fn("hello");
}

function getNum(fn:DisplayNumFunction){
    fn(5)
}

function printToConsole(s:string):void{
    console.log(s);
}


greeter(printToConsole)
greeter((s:string)=>console.log(s))

getNum((n:number)=>console.log("the number is",n));
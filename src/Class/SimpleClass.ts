class Greeter{
    greeting:string;

    constructor(message:string){
        this.greeting = message;
    }
    greet(){
        return "Hello" + this.greeting
    }
}

let greeeter = new Greeter("John")
console.log(greeeter.greet())
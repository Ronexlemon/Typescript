class Person2{
    public name: string

    private secretNumber:number

    constructor(name:string){
        this.name ="lemon"
        this.secretNumber = 4
    }
}

class Doctor extends Person2{
    occupation:string
    constructor(occupation:string,name:string){
        super(name)
        this.occupation =occupation
    }
}

const AB = new Doctor("doctor","demo")
console.log(AB.name,"and", AB.occupation)
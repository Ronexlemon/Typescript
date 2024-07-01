//Private, public, protected

class Modifier{
    //a private field using  ECMAScript private fields
    #name:string;

    constructor(_name: string){
        this.#name = _name;
    }

    readName(){
        console.log("the name is", this.#name)
    }

}

class Private{
    //can only be accessed inside the classonly and not outside
    private name:string
    constructor(_name:string){
        this.name = _name}
        readName(){
            console.log("the name is", this.name)
            }
}

class Person{
    //can be accessed inside the class and outside the class -> through inheritance
    protected namee:string;
    constructor(_name:string){
        this.namee = _name}
    
}
class Emplo extends Person{
    private department:string
    constructor(_name:string, _department:string){
        super(_name)
        this.department = _department}

public getDetails(){
    console.log("the name is", this.namee, "and i work on this department",this.department)
}

}

let mod = new Modifier("John doe")
let pri = new Private("Doen")
let emp = new Emplo("John doe", "IT")
emp.getDetails()
pri.readName()

mod.readName()

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

let mod = new Modifier("John doe")
let pri = new Private("Doen")
pri.readName()

mod.readName()

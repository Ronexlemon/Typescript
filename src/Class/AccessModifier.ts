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

let mod = new Modifier("John doe")

mod.readName()

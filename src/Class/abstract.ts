abstract class Persons{
    name:string

    constructor(name:string){
        this.name = name
       
    }
    personOccupation(Occu:string):void{
        console.log(`The person occupation is: ${Occu}`)
    }
    abstract getSalary():number
}
class Employeeees extends Persons{
    code :string

    constructor(code:string,name:string){
        super(name)
        this.code = code
    }
    getSalary(): number {
        return 2000
    }

}
const Empl = new Employeeees("TEWSS","john")
Empl.personOccupation("Teacher")
console.log(Empl.getSalary())
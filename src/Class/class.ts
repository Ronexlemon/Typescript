interface ITeacher{
    teacherType: string
 

    level: (arg0:number) => boolean

}

class Perons {
    pName: string
    constructor(name: string){
        this.pName =name;
    }


}
class Teacher extends Perons implements ITeacher  {
    teacherType : string

    constructor(tType:string,name:string){
        super(name)
        this.teacherType =tType

    }
    level = (arg0: number) =>{
        if( arg0 < 30000){
            return false
        }else{
            return true
        }

  
    }
}

const T = new Teacher("is headMaster","john")

console.log(`Teacher details name : ${T.pName}, is: ${T.teacherType} : ${T.level(40000)}`)
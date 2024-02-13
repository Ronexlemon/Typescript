"use strict";
class Perons {
    constructor(name) {
        this.pName = name;
    }
}
class Teacher extends Perons {
    constructor(tType, name) {
        super(name);
        this.level = (arg0) => {
            if (arg0 < 30000) {
                return false;
            }
            else {
                return true;
            }
        };
        this.teacherType = tType;
    }
}
const T = new Teacher("is headMaster", "john");
console.log(`Teacher details name : ${T.pName}, is: ${T.teacherType} : ${T.level(40000)}`);

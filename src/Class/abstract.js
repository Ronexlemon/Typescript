"use strict";
class Persons {
    constructor(name) {
        this.name = name;
    }
    personOccupation(Occu) {
        console.log(`The person occupation is: ${Occu}`);
    }
}
class Employeeees extends Persons {
    constructor(code, name) {
        super(name);
        this.code = code;
    }
    getSalary() {
        return 2000;
    }
}
const Empl = new Employeeees("TEWSS", "john");
Empl.personOccupation("Teacher");
console.log(Empl.getSalary());

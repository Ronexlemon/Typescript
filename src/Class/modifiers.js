"use strict";
class Person2 {
    constructor(name) {
        this.name = "lemon";
        this.secretNumber = 4;
    }
}
class Doctor extends Person2 {
    constructor(occupation, name) {
        super(name);
        this.occupation = occupation;
    }
}
const AB = new Doctor("doctor", "demo");
console.log(AB.name, "and", AB.occupation);

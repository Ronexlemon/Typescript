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
const ABC = new Doctor("doctor2", "demo2");
console.log(AB.name, "and", AB.occupation);
class Team {
    constructor() {
        this.Personname = "john";
        this.num = 100;
    }
    getName() {
        return this.Personname;
    }
    getAnyType(item) {
        return item;
    }
    mul(n) {
        return n * this.num;
    }
}
const team = new Team();
console.log(team.Personname);
console.log(team.getAnyType("lemon"));
console.log(team.mul(100));

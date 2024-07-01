class Animals{
    name:string;
    constructor(_name:string){
        this.name = _name;
    }
    move(distanceInMeters:number =0){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Horse extends Animals{
    constructor(_name:string){
        super(_name)
    }
    move(distanceInMeters:number =0){
        console.log("runs...")
        super.move(distanceInMeters)
    }
}
class Dogs extends Animals{
    constructor(_name:string){
        super(_name)
        }
        move(distanceInMeters:number =0){
            console.log("walks ....")
            super.move(distanceInMeters)
            }
        }


let horse = new Horse("horse runs")

horse.move(30)
let dogs = new Dogs("dog walks")
dogs.move(30)

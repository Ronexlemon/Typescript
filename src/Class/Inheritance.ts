class Animal{
    move(distanceInMeters?:number){
        console.log("the animal works:",distanceInMeters)

    }
}

class Dog extends Animal{
    bark(){
        console.log("the dog barks")
    }
}

let dog = new Dog()
dog.bark()
dog.move(20)
dog.move()
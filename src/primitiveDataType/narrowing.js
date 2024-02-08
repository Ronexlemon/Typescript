"use strict";
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        console.log("nothing passed");
        console.log(typeof null);
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    else {
        return animal.fly();
    }
}
const fish = {
    swim: () => {
        console.log("fish swim");
    }
};
const bird = {
    fly: () => {
        console.log("bird fly");
    }
};
move(fish);
move(bird);
printAll("lemon");
printAll(["yollow", "jdson"]);
printAll(null);

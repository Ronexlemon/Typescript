/*****
 * Where and how an object is assigned a type can make  a difference in the type system. 
 * One of the key examples of this is in excess property checking which validates the object more thoroughly when it is created and assigned to an object
 * type during creation
 * 
 */

interface SquareConfig{
    color?: string;
    width?:number;
}

function createSquare(config:SquareConfig):{color:string,area:number}{

    return {color: config.color || "Green", area:config.width?config.width*config.width:0};
}

let mySquare = createSquare({color:"Green",width:20})

console.log(mySquare.area, mySquare.color)
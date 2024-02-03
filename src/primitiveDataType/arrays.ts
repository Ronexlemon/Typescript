//normal declaration

let fruits: string[] =["melon","yogo","orange","mango"]

let fruits1: Array<string> = ["melon1","yogo1","orange1","mango1"]

let fruitsPriceArray:Array<string|number> = ["hello",1,"yollow",45]


function getArrayAndReturnAnArray(array:Array<string|number>):Array<string|number>{
    return array;

}

const CallFunctions =()=>{
    console.log("Array returned",getArrayAndReturnAnArray(fruits))
    console.log("Array returned",getArrayAndReturnAnArray(fruitsPriceArray))
}
CallFunctions()
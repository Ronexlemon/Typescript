//normal declaration

let fruits: string[] =["melon","yogo","orange","mango"]

let fruits1: Array<string> = ["melon1","yogo1","orange1","mango1"]


function getArrayAndReturnAnArray(array:Array<string>):Array<string>{
    return array;

}

const CallFunctions =()=>{
    console.log("Array returned",getArrayAndReturnAnArray(fruits))
}
CallFunctions()
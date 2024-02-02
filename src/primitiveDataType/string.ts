type stringType={
    variable: string
}

type twoString={
    name1: string,
    name2: string
}

let   personName:stringType ={variable:"John Doe"}
let newName;

console.log("Person Name in lowercase:",personName.variable.toLocaleLowerCase())


//typescript function that takes a string

function getName(name:stringType){
    newName= name.variable;

}

function splitString(name:stringType){
    const newSplitString = name.variable.split(" ")
    return newSplitString;

}

function concatTwoStrings({name1,name2}:twoString){
    const concatStrings = name1.concat(name2)
    return concatStrings;

}

getName({variable:"Lemonr"})

console.log("newName",newName)

console.log(`split String at  " "`,splitString({variable:"Hello There"}))

console.log(`concat two strings`, concatTwoStrings({ name1: "yes", name2: "baanah" }));
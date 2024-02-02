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

function concatTwoStrings(data:twoString){
    const concatStrings =  data.name1.concat(data.name2)
    return concatStrings;

}
function replacePersonName(newPerson:stringType){
    return personName.variable.replace("Doe",newPerson.variable);

}

function checkIfStringIncludes(data:twoString){
    return data.name1.includes(data.name2)
}

getName({variable:"Lemonr"})

console.log("newName",newName)

console.log(`split String at  " "`,splitString({variable:"Hello There"}))

console.log(`concat two strings`, concatTwoStrings({ name1: "yes", name2: "baanah" }));
console.log("replace: ",replacePersonName({variable:"Yes"}))

console.log("data includes inside another one",checkIfStringIncludes({name1:"I saw , i go, i found",name2:"go"}))
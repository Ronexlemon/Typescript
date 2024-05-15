//propeties can also be marked as readonly -> a property marked as readonly can't be written to during type-checking

interface SomeType{
    readonly prop:string;
}

function doSomething(obj:SomeType):string{
   // obj.prop ="fjnfnjf"; => can't be reassign
    return  obj.prop;

}

console.log(doSomething({prop:"yollow"}))
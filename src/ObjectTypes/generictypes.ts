/***
 * Lets imagine Box type that can contain any value ->strings,numbers,Giraffes
 */

interface Box{
    contents:any
}
interface BoxXX{
    contents:string
}
/***
 * instead we can make a generic Box type which declaires a type parameter
 */

interface Boxx<Type>{
    contents:Type
}

let boxXA: BoxXX ={
    contents:"john"
}

let boxB: Boxx<number> ={
    contents:10
}
let boxBB: Boxx<string> ={
    contents:"Hello"
}
console.log(boxB.contents)
console.log(boxBB.contents)
console.log(boxXA.contents)
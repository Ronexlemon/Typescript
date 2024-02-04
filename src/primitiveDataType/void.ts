let names:void = undefined

function returnNothing():void{
    console.log("returns nothing")
}

function getNothing(data:void):void{
    console.log("get nothing so returns nothing")
}

const CallAllFunction =()=>{
    returnNothing()
    getNothing()
}
CallAllFunction()
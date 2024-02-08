
function printAll(strs:string|string[]|null):void{
    if(strs && typeof strs === "object"){
        for (const s of strs){
            console.log(s)
        }
    }else  if (typeof strs === "string"){
        console.log(strs);

    }else{
        console.log("nothing passed")
        console.log(typeof null);
    }
}

printAll("lemon");
printAll(["yollow","jdson"])
printAll(null)
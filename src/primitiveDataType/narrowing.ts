
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
//the in operator

type Fish = {swim: ()=>void}
type Bird = {fly:()=>void}
type Human ={swim?:()=>void; fly?:()=>void}

function move(animal: Fish |Bird){
    if("swim" in animal){
        return animal.swim()
    }else{
        return animal.fly();

    }
   
}

const fish :Fish ={
    swim: ()=>{
        console.log("fish swim")
    }
}
const bird:Bird={
    fly:()=>{
        console.log("bird fly");
    }
}
move(fish)
move(bird)
printAll("lemon");
printAll(["yollow","jdson"])
printAll(null)


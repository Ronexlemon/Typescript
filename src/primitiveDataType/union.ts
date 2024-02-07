
 type obj ={
    name:string,
    salary:number,
    month: string  |number
 }
 type union= (string | number | obj)

function checkDataType(data_type:union){
    if(typeof(data_type) === "number"){
        console.log("yeah the data is a number")
    }else if(typeof(data_type) === "string"){
        console.log("yeah the data is a string")

    }else if(typeof(data_type) === "object"){
        console.log("yeah the data is an object")

    }
}


function welcomePeople(x:string[] | string){
    if( Array.isArray(x)){
        console.log("Hello," + x.join("and"));
    }else{
        console.log("Welcome lone  traveler",x);
    }
}
checkDataType("man")
checkDataType(1234)
checkDataType({name:"yollow",salary:2000,month:"jan"})
welcomePeople(["ronex","lemon"])
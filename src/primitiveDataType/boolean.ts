
type isValid={
    valid: boolean
}

let vall ;
const data ={
    valid:true,salary:100,place: "NaI"
}

function checkIfValid(data:isValid){
    if(data.valid){
        vall = true;
        
    }else{
        vall =false;
        
    }

    return vall;
    
    
}

console.log("check if its valid",checkIfValid(data))
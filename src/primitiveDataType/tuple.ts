//tuple

type person=[number,Array<string>,boolean];

function addPersonDetails(details:person):[number,person]{
    const newSalary=  details[0]*2;
    details[1].push("yollow")
    
    
    return [newSalary,details];

}

const CallTupple =()=>{
    console.log("new salary from tupple",addPersonDetails([200,["john"],true]))
}

CallTupple()



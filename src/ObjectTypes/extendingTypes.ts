interface BasicAddress{
    name?:string;
    street:string;
    city:string;
    state:string;
    postalCode:string
}

// interface AddressWithUnit{
//     name?:string;
//     street:string;
//     city:string;
//     state:string;
//     postalCode:string
//     uint:string
// }

interface AddressWithUnit extends BasicAddress{
    uint:string
}


//Intersection types

interface Colorful{
    color:string
}

interface Circle{
    radius:number
}

type ColorfulCircle = Colorful & Circle; // intersection

function draw(circle:ColorfulCircle){
    console.log(`Drawing a ${circle.color} circle with radius ${circle.radius}`);
}
draw({color:"red",radius:10})
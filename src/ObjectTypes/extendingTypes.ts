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



//optional properties
interface Shape{
    name:string;
    color:string;
}

interface PaintOptions{
    shape:Shape;
    xPos?:number;
    yPos?:number;
}


function paintShape(opts:PaintOptions){
    const {shape, xPos = 0, yPos = 0} = opts;
    

    console.log(shape,xPos,yPos)
}

paintShape({shape:{name:"rectangle", color:"green"},xPos:100,yPos:200})
paintShape({shape:{name:"rectangle", color:"green"},xPos:200,yPos:400})
paintShape({shape:{name:"rectangle", color:"green"},xPos:300,yPos:600})
paintShape({shape:{name:"rectangle", color:"green"},xPos:400,yPos:800})
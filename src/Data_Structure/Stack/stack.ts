class Stack<T>{
    private size:number;
    private items:T[];
    constructor(){
        this.size =0;
        this.items=[];
    }
    push(value:T):void{
        this.items.push(value)
        this.size++;
    }
    pop():void{
        if(this.isEmpty()){
            throw new Error("stack undeflow:  cannot pop from an empty stack");

        }
        this.items.pop() //pop the las element
        this.size --;
    }
    getSize():number{
        return this.size;
    }
    isEmpty():boolean{
        return this.size ===0;
    }
    peek():T |undefined{
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.items.length -1];
    }
    clear():void{
        if(this.isEmpty()){
            throw new Error("Stack Empty: Cannot clear an empty stack")
        }
        this.items =[];
        this.size =0;
    }
    contains(value:T):boolean{
        if(this.isEmpty()){
            return false;
        }
        return this.items.includes(value);
    }
    toString():string{
        return JSON.stringify(this.items);
    }
    clone():T[]{
        return [...this.items];
    }


}

const stack = new Stack<number>;
console.log("Stack empty?: ",stack.isEmpty())

stack.push(1)
stack.push(2)
stack.push(3)

console.log("Stack Contents: ",stack.toString())
console.log("get stack size:",stack.getSize())
stack.pop()
console.log("get stack size after pop:",stack.getSize())
console.log("stack contains:",stack.contains(2))
console.log("Stack empty?: ",stack.isEmpty())
console.log("Stack last element: ",stack.peek())



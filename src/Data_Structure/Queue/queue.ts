//queue FIFO
class Queue<T>{
    private size:number;
    private items:T[];
    constructor(){
        this.size =0;
        this.items =[];
    }
    //enqueue
    enqueue(value:T):void{
        this.items.push(value)
        this.size ++;
    }
    //dequeue
    dequeue():void{
        if(this.isEmpty()){
            throw new  Error("Dequeue operation on an empty queue")

        }
        this.items.shift()
        this.size --;
    }
    //search
    contains(value:T):boolean{
        if(this.isEmpty()){
            throw new Error("Queue is empty")
        }
       return  this.items.includes(value);
    }
    
    //access first element
    peek():T |undefined{
        return this.isEmpty()? undefined: this.items[0];
    }

    //check empty
    isEmpty():boolean{
        return this.size ===0;
    }
    //getsize
    getSize():number{
        return this.size;
    }
}

const queue = new Queue<number>()

console.log("The queue is Empty:",queue.isEmpty())
console.log("The Size of the queue is before enqueue:",queue.getSize())

queue.enqueue(1)
queue.enqueue(2)
console.log("Front of the queue:",queue.peek())
queue.enqueue(3)

console.log("The Size of the queue is after enqueue:",queue.getSize())
queue.dequeue()
console.log("The Size of the queue is after denqueue:",queue.getSize())
console.log("Front of the queue:",queue.peek())
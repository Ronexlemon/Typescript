//Priority queue is a data structure that maintains  collection of elements, each associated
//with a priority. THe element withthe highgest priority is served before others

type PriorityQueueItem<T> = [number,T]

class PriorityQueue<T> {
    private items : PriorityQueueItem<T>[]
    private size:number
    constructor(){
        this.items = [];
        this.size =0;
    }
    //enqueue O(n)
    enqueue(item:PriorityQueueItem<T>){
        if(this.isEmpty()){
            this.items.push(item)
        }else{
            let added = false;
            for (let i=0; i< this.items.length;i++){
                if(item[0] < this.items[i][0]){
                    this.items.splice(i,0,item);
                added = true;
                break

                }
                
            }
            if(!added){
                this.items.push(item)
            }
        }
        this.size ++;


    }
    //dequeue 
    dequeue(){
        if(this.isEmpty()){
            throw new Error("Empty queue")
        }
        this.items.shift()
        this.size --;
    }
    //getsieze
    getSize():number{
        return this.size;
    }
    //peek
    peek():T |undefined{
        return this.isEmpty()? undefined: this.items[0][1]
    }
    //empty
    isEmpty():boolean{
        return this.size ===0;
    }

}
const priority = new PriorityQueue<string>()
console.log("Size Before enqueue:",priority.getSize())
console.log("Check if the priorityQueue is Empty before:",priority.isEmpty())


priority.enqueue([1,"Lemon"])
priority.enqueue([2,"Lemonr"])
console.log("size after enqueue:",priority.getSize())
priority.dequeue()
console.log("size after denqueue:",priority.getSize())
priority.enqueue([3,"yollow"])

console.log("get the first element",priority.peek())
console.log("Check if the priorityQueue is Empty after:",priority.isEmpty())
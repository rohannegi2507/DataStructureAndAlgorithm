class Node{
    constructor(item){
        this.element = item;
        this.next= null;
    }
};

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    getHead(){
        return this.head;
    }

    add(item){
        const node = new Node(item);
        if(this.head === null){
           this.head = node;
        }else{
        let current = this.head;//first node of linkedList
        while(current.next != null){
            current = current.next;
        }
        current.next = node;
      }
        this.size++;
    }

    // insertAt(element, index){
    //     const node = new Node(element)
    //     if(head=== null){

    //     }
    // }

     reverseList () {
        if(this.head === null){
            return;
        }
        
        var prev= null;
        var current= this.head;
        var forward = this.head.next;
        while(forward!=null){
            current.next= prev;
            prev= current
            current= forward;
            forward = forward.next;
        }
        current.next= prev;
        prev= current
        this.head= current;    
    };

    isCycle(){
        if(this.size <=1){
            return false;
        }
        let temp = this.head;
        while(temp.next){
            temp = temp.next;
            if(temp.next === this.head){
                return true;
            }
        }
        
         return false;
        }
        setCycle(){
            let temp = this.head;
            while(temp.next){
                temp = temp.next;
            }
            temp.next = this.head;
        }
    
    remove(index){
     let current = this.head;
     let currentIndex = 0;
     let previousNode = this.head;
     while(current.next && index === currentIndex){
         previousNode = current;
         current= current.next;
         currentIndex++;
     }
     previousNode.next = current.next;
    }
    
    printList(){
        let current = this.head;
        while(current){
            console.log(current.element)
            current = current.next;
        }
    }
}

function intersection(headA , headB){
let moveA = headA;
let moveB= headB;
let countA=0;
while(moveA){
  countA++;
  moveA= moveA.next;
}

let countB=0;
while(moveB){
  countB++;
  moveB= moveB.next;
}
console.log(Math.abs(-5 + 3));
console.log(countB);
}
const obj = new LinkedList();

const obj1 = new LinkedList();

obj.add(1);
obj.add(3);
obj.add(5)

obj1.add(1);
obj1.add(3);
obj1.add(5)
intersection(obj.getHead(),obj1.getHead());
//obj.setCycle()
//obj.remove(1);
//console.log(obj.isCycle())
//obj.reverseList();
//obj.printList();
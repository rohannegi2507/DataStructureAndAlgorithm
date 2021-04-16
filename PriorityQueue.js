var PriorityQueue = function(){
    this.list =[];

    this.enqueue =  function(item){
      if(this.isEmpty()){
           this.list.push(item);
      }else{
      let added =false;
      for(let i =0  ;i< this.list.length;i++){
         if(item[1] < this.list[i][1]){
             this.list.splice(i, 0, item);
             added = true;
             break;
         }
      }
      if(added === false){
          this.list.push(item);
      }
    }
    }

    this.dequeue = function(){
         let firstItem = this.top();
         return this.list.shift();
    }

    this.top = function(){
        return this.list[0];
    }

    this.size = function(){
        return this.list.length;
    } 

    this.isEmpty= function(){
        return this.list.length === 0; 
    }

    this.print = function(){
        console.log(this.list)
    }

}

var obj = new PriorityQueue();
obj.enqueue(['rohan',3]);
obj.enqueue(['aman', 5]);
obj.print();
console.log(obj.dequeue());
console.log(obj.size());
obj.print();
console.log(obj.dequeue());
console.log(obj.isEmpty());
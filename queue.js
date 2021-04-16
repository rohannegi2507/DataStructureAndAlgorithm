var Queue = function(){
    this.list =[];

    this.enqueue =  function(item){
      this.list.push(item);
    }

    this.dequeue = function(){
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
}

var obj = new Queue();
obj.enqueue(3);
obj.enqueue(5);
console.log(obj.dequeue());
console.log(obj.size());

console.log(obj.dequeue());
console.log(obj.isEmpty());
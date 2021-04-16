var Stack = function(){
    this.count =0;
    this.list =[];

    this.push =  function(item){
      this.list[this.count++] =  item;
    }

    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }
        let lastItem = this.list[this.count -1];
        delete this.list[this.count -1];
        this.count--;
        return lastItem;
    }

    this.peek = function(){
        return this.list[this.count - 1];
    }

    this.size = function(){
        return this.count;
    } 

    this.isEmpty= function(){
        return this.count === 0; 
    }
}

var obj = new Stack();
obj.push(3);
obj.push(5);
console.log(obj.pop());
console.log(obj.size());
console.log(obj.pop());
console.log(obj.isEmpty());
class Graph {
    constructor(vertics){
        this.noOfVertices = vertics;
        this.adjList= new Map();
    }
    addVertex(vertics){
        this.adjList.set(vertics, new Set());
    }

    addEdge(x,y){
      this.adjList.get(x).add(y);
      this.adjList.get(y).add(x);
    }

    
    // Prints the vertex and adjacency list 
    printGraph() 
    { 
        // get all the vertices 
        var get_keys = this.adjList.keys(); 
    
        // iterate over the vertices 
        for (var i of get_keys)  
        { 
            // great the corresponding adjacency list 
            // for the vertex 
            var get_values = this.adjList.get(i); 
            var conc = ""; 
    
            // iterate over the adjacency list 
            // concatenate the values into a string 
            for (var j of get_values) 
                conc += j + " "; 
    
            // print the vertex and its adjacency list 
            console.log(i + " -> " + conc); 
        } 
    } 
    
    dfsD(node) { 
       let  s=[];
       let explored = new Set();
       s.push(node);
    
       // Mark the first node as explored
       explored.add(node);
    
       // We'll continue till our Stack gets empty
       while (s.length>0) {
          let t = s.pop();
    
       // Log every element that comes out of the Stack
          console.log(t);
    
       // 1. In the edges object, we search for nodes this node is directly connected to.
       // 2. We filter out the nodes that have already been explored.
       // 3. Then we mark each unexplored node as explored and push it to the Stack.
       const set= this.adjList.get(t);

       const array = [...set];
       array
       .filter(n => !explored.has(n))
       .forEach(n => {
          explored.add(n);
          s.push(n);
          });
       }
   }

   dfs(node){
       let  explored= new Set();
       let stack = [];
       explored.add(node)
       stack.push(node)
       while(stack.length>0){
         const item = stack.pop();
         console.log(item);
         const neighbours=[...this.adjList.get(item)];
         neighbours.filter((n)=>{
             if(!explored.has(n)){
                return n;
             }
         }).forEach((n)=>{
            explored.add(n) 
            stack.push(n);
         }
         )
       }
   }

   bfs(node){
    let explored= new Set();
    let queue = [];
    explored.add(node)
    queue.push(node)
    while(queue.length>0){
      const item = queue.shift();
      console.log(item);
      const neighbours=[...this.adjList.get(item)];
      neighbours.filter((n)=>{
          if(!explored.has(n)){
             return n;
          }
      }).forEach((n)=>{
         explored.add(n) 
         queue.push(n);
      }
      )
    }
}
      
}

var g = new Graph(7); 
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ,'G']; 
  
// adding vertices 
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 
  
// adding edges 
g.addEdge("A", "C");
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("B", "G");
//console.log(g)
//g.printGraph()
//g.bfs('A')

var string = 'A man, a plan, a canal. Panama';
string=string.toLowerCase();

var stripped = string.replace(/[^A-Za-z]/g, '');
console.log(stripped);
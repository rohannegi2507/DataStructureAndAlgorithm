class Node{
    constructor(data, left = null, right = null){
        this.left = left;
        this.right= right;
        this.data =data;
    }
}

class BinarySearchTree{
    constructor(){
        this.root= null
    }

    add(item){
        if(this.root === null){
            this.root = new Node(item);
        }else{
            const searchTree = function(node){
                if(item < this.root.data){
                    if(this.root.left === null){
                        this.root.left = new Node(item);
                        return;
                    }else{
                       searchTree(this.root.left);
                       return;
                    }
                }else if(item > this.root.data){
                    if(this.root.right === null){
                        this.root.right = new Node(item);
                        return;
                    }else{
                       searchTree(this.root.right);
                       return;
                    }
                }else{
                    return null;
                }
            };
            searchTree(item);
        }
    }

    printTree(){
        
    }
}


class BinaryTree{
    constructor(){
        this.root=null;
    }

    insert(data){
        if(this.root==null){
            this.root= new Node(data);
            return this.root;
        }

        let queue=[];
        queue.unshift(this.root);
        while(queue.length!=0){
            let temp = queue.pop();
            if(temp.left){
                queue.unshift(temp.left);
            }else{
                temp.left= new Node(data);
                return this.root;
            }

            if(temp.right){
               queue.unshift(temp.right);
            }else{
                temp.right=new Node(data);
                return this.root;
            }
        }
        return this.root;
    }

    inorder(head=this.root){
        if(head== null){
            return;
        }
        this.inorder(head.left);
        console.log(head.data);
        this.inorder(head.right);
    }

    preOrder(head=this.root){
        if(head== null){
            return;
        }
        console.log(head.data);
        this.inorder(head.left);
        this.inorder(head.right);
    }

    postOrder(head=this.root){
        if(head== null){
            return;
        }
        this.inorder(head.left);
        this.inorder(head.right);
        console.log(head.data);
    }

    height(head= this.root){
        if(head===null){
           return 0;
        }

        let lHeight = this.height(head.left);
        let rHeight = this.height(head.right);
        
        return lHeight>rHeight ? (lHeight+1) : (rHeight + 1);
    }

    lca(head=this.root, n1, n2){
       if(this.root == null){
           return null;
       }
       
       if (this.root.data > n1 && this.root.data > n2) 
       return lca(head.left, n1, n2); 
 
   // If both n1 and n2 are greater than root, then LCA lies in right 
      if (this.root.data < n1 && this.root.data < n2) 
         return lca(head.right, n1, n2); 
 
       return root; 
    }
}

let binaryTree= new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(3);

//    5
//   / \
//  1   2
// / \ / \
//4  3
//binaryTree.inorder();

binaryTree.root.right.right=9;
console.log(binaryTree.root.right.right);

console.log(binaryTree.root.right);
console.log(binaryTree.height());
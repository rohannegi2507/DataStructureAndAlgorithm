arr=[5,1,4,1,1];
arr= arr.sort((a,b)=>{
    return a-b;
})
console.log(arr)

let max=1;
let res=0;

//bruteForce
function bruteForce(){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] === arr[i+1]){
        max++;
        }else{
            max=0;
        }
        if(max>res){
            res=max;
        }
    }
    console.log(res)
}

//Hashmap solution
function hashMap(){
    let counter=new Map();

    for(const item of arr){
        if(counter[item] === undefined){
        counter[item]=1;
        }else{
            counter[item]++;;
        }
   }
}

//Moore voting algorithm
//bruteForce
let count=0;
function mooresAlorithm(){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] === arr[i+1]){
        max++;
        }else{
            max=0;
        }
        if(max>res){
            res=max;
        }
    }
    console.log(res)
}
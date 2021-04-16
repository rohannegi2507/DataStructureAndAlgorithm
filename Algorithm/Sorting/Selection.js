// Algorithm
// 1- Loop over each item of an array
// 2- consider the item from the loop as minimum element index
// 3- Loop over other elements of the array which is at right side
// 4- If other sub part of the array has better minimum value then selected
// then swap them

function selectionSort(arr){
    for(let i = 0;i < arr.length; i++){
        let min = i;
        for (let j = i+1; j < arr.length ;j++){
          if(arr[min] > arr[j]){
              min = j;
          }
        }  
        if(min != i){
            [arr[min], arr[i]] =[arr[i], arr[min]];
        }
    }
    console.log(arr);
}

function selectSortTest(arr){
    for (let i =0;i<arr.length ;i++){
        let min = i;
        for(let j=i;j<arr.length;j++){
             if(arr[min]> arr[j]){
                 min = j;
             }
        }
        //swap items
        [arr[min], arr[i]] = [arr[i], arr[min]];
    }
    return arr;
}

console.log(selectSortTest([3,2,1]))


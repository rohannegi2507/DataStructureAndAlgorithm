function insertionSort(arr){
  for(let i = 0; i < arr.length ; i++){
      let current = arr[i];
      let j = i;
      while(j > 0 && current < arr[j-1]){
        arr[j] = arr[j-1]
        j=j-1;
      }

      arr[j] = current;
  }
  return arr;
}

console.log(insertionSort([3,2,1,0]))
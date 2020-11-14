function lastIndexOf(array, value){
  let index = -1;
  for (let i = 0; i < array.length; i++){
    if (array[i] === value){
      index = i;
    }
  }
  return index;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
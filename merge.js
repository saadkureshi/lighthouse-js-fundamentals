function merge (array1, array2){
  let mergedArray = array1.concat(array2);
  mergedArray.sort(function(a, b){
    if (a - b > 0) return 1;
    if (a - b < 0) return -1;
    return 0;
  })

  return mergedArray;

}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
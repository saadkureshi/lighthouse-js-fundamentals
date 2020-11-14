const range = function(start, end, step){
  let output = [];
  if (start == null || end == null || step == null || start > end || step < 0){
    return [];
  } else {
    let length = Math.floor((end - start) / step) + 1;
    output.push(start);
    for (let i = 0; i < length - 1; i++){
      output.push(output[i] + step);
    }
    return output;
  }
}

console.log(range(20, 4));
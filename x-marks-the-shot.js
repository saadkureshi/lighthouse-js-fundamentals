const finalPosition = function(moves){

  let output = [0, 0];

  for (const move of moves){
    if (move === "west"){
      output[0] = output[0] - 1;
    } else if (move === "east"){
      output[0] = output [0] + 1;
    } else if (move === "north"){
      output[1] = output[1] + 1;
    } else if (move === "south"){
      output[1] = output[1] -1;
    }
  }
  return output;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

console.log(finalPosition(moves));
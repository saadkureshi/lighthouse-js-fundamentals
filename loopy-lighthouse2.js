function loopyLighthouse(range, multiples, words){
  let startPoint = range[0];
  let endPoint = range[1];

  for (let i = startPoint; i <= endPoint; i++){
    switch (true){
    case (i % 5 === 0 && i % 2 === 0):
      console.log("BattyBeacon");
      break;
    case (i % 2 === 0):
      console.log("Batty");
      break;
    case (i % 5 === 0):
      console.log("Beacon");
      break;
    default:
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
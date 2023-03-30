function truthCheck(collection, pre) {
  let count = 0;
  let myKey = [];

  for(let i = 0; i < collection.length; i++){
    myKey = Object.keys(collection[i]);
    console.log(myKey);

    if(collection[i][pre] && collection[i][pre] !== false && collection[i][pre] !== NaN && collection[i][pre] !== null && collection[i][pre] !== 0){
      count++;
    }
  }
  if(count == collection.length){
    return true
  }else{
    return false;
  }
  
}

truthCheck([{name: "Quincy", role: "Founder", isBot: true}, {name: "Naomi", role: "", isBot: true}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

console.log(typeof NaN)

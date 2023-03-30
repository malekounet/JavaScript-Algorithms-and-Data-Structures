function addTogether(){
    let arg = [];
    let result;
    if(arguments.length == 2){
      
      arg.push(arguments[0]);
      arg.push(arguments[1]);
      console.log(arg)
      if(typeof arg[0] == "number" && typeof arg[1] == "number"){
        result = arg[0] + arg[1];
        console.log(result)
        return result;
      }else{
        result = undefined;
      }
    }else if(arguments.length == 1){
      let para = arguments[0];
      return (typeof arguments[0] == "number" ? function(sasa){
        if(typeof sasa == "number"){
          
          console.log()
          result = para + sasa;
          console.log(result)
          return result;
        }
      }: undefined);
    }
    
    
  }
  
  addTogether(5)(7);
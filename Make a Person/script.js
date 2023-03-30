const Person = function(firstAndLast) {
    // Only change code below this line
    
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
    this.getFirstName = ()=>{
      console.log(firstAndLast.split(" ")[0])
      return firstAndLast.split(" ")[0];
    };
    this.getLastName = ()=>{
      console.log(firstAndLast.split(" ")[1])
      return firstAndLast.split(" ")[1];
    };
    this.setFirstName = (first)=>{
      firstAndLast = firstAndLast.split(' ');
      firstAndLast[0] = first;
      firstAndLast = firstAndLast.join(' ');
      console.log(firstAndLast)
    };
    this.setLastName = (last)=>{
      firstAndLast = firstAndLast.split(' ');
      firstAndLast[1] = last;
      firstAndLast = firstAndLast.join(' ');
      console.log(firstAndLast)
    };
    this.setFullName = (full)=>{
      firstAndLast = full;
    };
  
    return firstAndLast;
  };
  
  const bob = new Person('Bob Ross');
  
  // console.log(Object.keys(bob))
  
  console.log(bob.getLastName());
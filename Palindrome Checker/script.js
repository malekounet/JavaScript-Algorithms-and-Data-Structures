function palindrome(str) {
    let reg = /[a-zA-Z0-9]/ig;
    // console.log(str.match(reg))
    let rs = str.match(reg);
    let result = false;
    let count = 0;
    rs = rs.map((el)=>{
      if(typeof el == "string"){
        return el.toLowerCase();
      }else if(typeof el == "number"){
        return el;
      }
      
    })
    // console.log(rs)
    if(rs.length % 2 == 0){
      for(let i = 0; i < rs.length/2 ; i++){
        if(rs[i] == rs[rs.length - 1 - i]){
          // console.log("hello")
          count++;
        }
      }
  
      if(count == rs.length/2){
        result = true
      }
    }else{
      for(let i = 0; i < parseInt(rs.length/2); i++){
        if(rs[i] == rs[rs.length-1-i]){
          count++
        }
      }
      if(count == parseInt(rs.length/2)){
        result = true;
      }
    }
    return result;
  }
  
  palindrome("axcecxa");
  console.log(palindrome("five|\_/|four"))
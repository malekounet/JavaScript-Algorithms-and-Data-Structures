function rot13(str) {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let result = [];
    let mot = str.split(" ");
    console.log(mot);
    letters = letters.map((el)=>{
      return el.toUpperCase();
    });
    for(let i = 0; i < mot.length; i++){
      let myMot = mot[i].split("");
      console.log(myMot)
      for(let j = 0; j < myMot.length; j++){
        let indx = letters.indexOf(myMot[j])
        if(indx >= 0){
          if(indx <=12){
          result.push(letters[indx+13])
        }else{
          result.push(letters[indx-13])
        }
        }else{
          result.push(myMot[j])
        }
      }
      result.push(" ");
    }
    delete result[result.length -1];
    result = result.join("");
    console.log(result)
    return result;
  }
  
  rot13("SERR CVMMN!");
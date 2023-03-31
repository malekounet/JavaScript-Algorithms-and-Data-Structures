function convertToRoman(num) {
    let s = {
      10: "ss",
      33: 'ds'
    }
    let result = [];
    let diviseur;
    let reste = num;
    //superieur a 1000
    if(num >= 1000){
      diviseur = parseInt(num / 1000);
      if(num % 1000 === 0){
        for(let i = 0; i < diviseur; i++){
          result.push("M");
        }
      }else{
        for(let i = 0; i < diviseur; i++){
          result.push('M');
        }
        reste = num % 1000;
      }
      console.log(reste);
    }
  //entre 900 et 1000
  if(reste < 1000 && reste >= 900){
    diviseur = parseInt(reste/900);
    if(reste % 900 == 0){
      for(let i = 0; i < diviseur; i++){
        result.push('CM')
      }
    }else{
      for(let i = 0; i < diviseur; i++){
        result.push("CM");
      }
      reste = reste % 900;
    }
    console.log(reste);
  }
  //entre 500 et 900
  if(reste < 900 && reste >= 500){
    diviseur = parseInt(reste/500);
    if(reste % 500 == 0){
      for(let i = 0; i < diviseur; i++){
        result.push('D');
      }
    }else{
      for(let i = 0; i < diviseur; i++){
        result.push("D");
      }
      reste = reste % 500;
    }
    console.log(reste);
  }
  //entre =400 et 500
  if(reste < 500 && reste >= 400){
    diviseur = parseInt(reste/400);
    if(reste % 400 == 0){
      for(let i = 0; i < diviseur; i++){
        result.push("CD");
      }
    }else{
      for(let i = 0; i < diviseur; i++){
        result.push("CD");
      }
      reste = reste % 400;
    }
  }
  //entre =100 et 400
  if(reste < 400 && reste >=100){
    diviseur = parseInt(reste/100);
    if(reste % 100 == 0){
      for(let i = 0; i < diviseur; i++){
        result.push("C");
      }
    }else{
      for(let i = 0; i < diviseur; i++){
        result.push("C");
      }
      reste = reste % 100;
    }
  }
  //entre =90 et 100
  if(reste < 100 && reste >= 90){
    diviseur = parseInt(reste/90);
    if(reste % 90 == 0){
      for(let i = 0; i < diviseur; i++){
        result.push("XC");
      }
    }else{
      for(let i =0; i < diviseur; i++){
        result.push("XC");
      }
      reste = reste % 90;
    }
  }
  //entre =50 et 90
  if(reste < 90 && reste >= 50){
    diviseur = parseInt(reste/50);
    if(reste % 50 == 0){
      for(let i = 0; i < diviseur; i++){
        result.push("L");
      }
    }else{
      for(let i =0; i < diviseur; i++){
        result.push("L");
      }
      reste = reste % 50;
    }
  }
  //entre =40 et 50
  if(reste < 50 && reste >= 40){
    diviseur = parseInt(reste/40);
    if(reste % 40 == 0){
      for(let i = 0; i < diviseur; i++){
        result.push("XL");
      }
    }else{
      for(let i =0; i < diviseur; i++){
        result.push("XL");
      }
      reste = reste % 40;
    }
  }
  //entre =10 et 40
  if(reste < 40 && reste >= 10){
    diviseur = parseInt(reste/10);
    if(reste % 10 == 0){
      for(let i = 0; i < diviseur; i++){
        result.push("X");
      }
    }else{
      for(let i =0; i < diviseur; i++){
        result.push("X");
      }
      reste = reste % 10;
    }
  }
  //entre =9 et 10
  if(reste < 10 && reste >= 9){
    diviseur = parseInt(reste/9);
    if(reste % 9 == 0){
      for(let i = 0; i < diviseur; i++){
        result.push("IX");
      }
    }else{
      for(let i =0; i < diviseur; i++){
        result.push("IX");
      }
      reste = reste % 9;
    }
  }
  //entre =5 et 9
  if(reste < 9 && reste >= 5){
    diviseur = parseInt(reste/5);
    if(reste % 5 == 0){
      for(let i = 0; i < diviseur; i++){
        result.push("V");
      }
    }else{
      for(let i =0; i < diviseur; i++){
        result.push("V");
      }
      reste = reste % 5;
    }
  }
  //entre =4 et 5
  if(reste < 5 && reste >= 4){
    diviseur = parseInt(reste/4);
    if(reste % 4 == 0){
      for(let i = 0; i < diviseur; i++){
        result.push("IV");
      }
    }else{
      for(let i =0; i < diviseur; i++){
        result.push("IV");
      }
      reste = reste % 4;
    }
  }
  //entre =1 et 4
  if(reste < 4 && reste >= 1){
    diviseur = parseInt(reste/1);
    if(reste % 1 == 0){
      for(let i = 0; i < diviseur; i++){
        result.push("I");
      }
    }else{
      for(let i =0; i < diviseur; i++){
        result.push("I");
      }
      reste = reste % 1;
    }
  }
  result = result.join("");
  console.log(result)
   return result;
  }
  
  convertToRoman(68);
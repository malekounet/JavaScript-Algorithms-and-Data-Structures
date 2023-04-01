function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let totalCid = 0;
    let result = [];
    let reste = 0;
    let cidPrices = cid.map((el)=>{
      return el[1];
    });
    for(let i = 0; i < cidPrices.length; i++){
      totalCid = totalCid + cidPrices[i];
    }
    console.log(totalCid)
    totalCid = parseFloat(totalCid.toFixed(2));
    console.log(totalCid)
    console.log(cidPrices)
    cidPrices = cidPrices.reverse();
    console.log(cidPrices)
    reste = change;
  //superieur a 100
    if(reste >= 100){
      let mod = parseInt(change / 100);
      if(change % 100 !== 0){
        reste = change % 100;
      }
    }
    //entre =20 et 100
    if(reste < 100 && reste >= 20){
      let mod = parseInt(reste/20);
      if(reste % 20 !== 0){
        reste = reste % 20;
      }
    }
    //entre =10  et 20
  if(reste < 20 && reste >= 10){
      let mod = parseInt(reste/10);
      if(reste % 10 !== 0){
        reste = reste % 10;
      }
    }
    //entre =5  et 10
  if(reste < 10 && reste >= 5){
      let mod = parseInt(reste/5);
      if(reste % 5 !== 0){
        reste = reste % 5;
      }
    }
    //entre =1 et 5
  if(reste < 5 && reste >= 1){
      let mod = parseInt(reste/1);
      if(reste % 1 !== 0){
        reste = reste % 1;
      }
    }
    //entre =0.25  et 1
  if(reste < 1 && reste >= 0.25){
      let mod = parseInt(reste/0.25);
      if(reste % 0.25 !== 0){
        reste = reste % 0.25;
      }
    }
    //entre =0.1 et 0.25 
  if(reste < 0.25 && reste >= 0.1){
      let mod = parseInt(reste/0.1);
      if(reste % 0.1 !== 0){
        reste = reste % 0.1;
      }
    }
    //entre =0.05 et 0.1
  if(reste < 0.1 && reste >= 0.05){
      let mod = parseInt(reste/0.05);
      if(reste % 0.05 !== 0){
        reste = reste % 0.05;
      }
    }
    //entre =0.01 et 0.05 
  if(reste < 0.05 && reste >= 0.01){
      let mod = parseInt(reste/0.01);
      if(reste % 0.01 !== 0){
        reste = reste % 0.01;
      }
    }
    console.log(reste)
    return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
   checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
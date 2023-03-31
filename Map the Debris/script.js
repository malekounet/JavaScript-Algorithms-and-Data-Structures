function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let arrRes = [];
    console.log(Math.PI)
    for(let i = 0; i < arr.length; i++){
      let result = 2*Math.PI*Math.sqrt(Math.pow(earthRadius+arr[i].avgAlt, 3)/GM);
      result = Math.round(result);
      arrRes.push({"name": arr[i].name, "orbitalPeriod": result});
    }
    console.log(arrRes)
    return arrRes;
  }
  
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
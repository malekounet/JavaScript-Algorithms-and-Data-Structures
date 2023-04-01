function telephoneCheck(str) {
    let result = false;
    let reg = /(^\d{3}-\d{3}-\d{4}|^\(\d{3}\)\d{3}-\d{4}|^\(\d{3}\)\s\d{3}-\d{4}|^\d{3}\s\d{3}\s\d{4}|^\d{10}\b|^1 \d{3} \d{3} \d{4}|^1\(\d{3}\)\d{3}-\d{4}|^1 \(\d{3}\) \d{3}-\d{4}|^1 \d{3}-\d{3}-\d{4})/;
    // let reg2 = /\d \d{3} \d{3} \d{4}/;
    console.log(reg.test(str))
    return reg.test(str);
  }
  
  telephoneCheck("1 555-555-5555");
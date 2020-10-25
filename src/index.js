module.exports = function check(str, bracketsConfig) {
  while(1)
  { let flag = false;
    bracketsConfig.forEach(element => {
      if(str.includes(element.join('')))
      {
        flag = true;
        str = str.replace(element.join(''),'');
      }
    });
    if(flag==false)
      break;
  }
  if(str.length==0)
    return true;
  return false;
}
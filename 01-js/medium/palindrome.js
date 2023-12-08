/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let l = 0, r =  str.length-1;
  while(l<r){
    
    code1 = str.charCodeAt(l);
    code2= str.charCodeAt(r);
    if( ((code1 < 65) || (code1 > 122) || (code1>90&&code1<97))){
      l++;
      continue;
    } 

    else if( ((code2 < 65) || (code2 > 122) || (code2>90&&code2<97)) ){
      r--;
      continue;
    } 

    else {if(!(str.charCodeAt(l)===str.charCodeAt(r))){
      return  false;
    }
    l++;
    r--;}
  }
  return true;
}
//65 90
// 97 122 

console.log(isPalindrome('Able, was I ere I saw Elba!'));
module.exports = isPalindrome;

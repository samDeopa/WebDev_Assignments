/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let n1 = str1.length, n2 = str2.length;
  if(n1!=n2){
    return false;
  }
  let hash = [];
  for(i=0 ;i<=60;i++){
    hash.push(0);
  }
  for( i =0;i<n1;i++){
    let ind =  str1.charCodeAt(i) - 'A'.charCodeAt(0);
    hash[ind] +=1;
  }
  for( i =0;i<n1;i++){
    let ind =  str2.charCodeAt(i) - 'A'.charCodeAt(0);
    hash[ind] -=1;
  }
  let res = true;
  hash.forEach(x => {
    if(x!=0){
      res = false;
    }
  });
  return res;
}
console.log(isAnagram('Debit Card', 'Bad Credit'));

module.exports = isAnagram

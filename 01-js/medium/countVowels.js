/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase();
  let count = 0;
  for(ele of str) {
    if(ele=='a'||ele=='e'||ele=='i' ||ele=='o'||ele=='u'){
      count++;
    }
  };
  return count;
    // Your code here
}
module.exports = countVowels;
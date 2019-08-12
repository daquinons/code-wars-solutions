/*
  Solution to kata https://www.codewars.com/kata/54ba84be607a92aa900000f1
 */

function isIsogram(str) {
  if (str === '') return true;
  let letters = [];
  const lowerCaseStr = str.toLowerCase();
  for (let letter of lowerCaseStr.split('')) {
    if (letters.includes(letter)) {
      return false;
    }
    letters.push(letter);
  }

  return true;
}

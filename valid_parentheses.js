/*
  Solution to kata https://www.codewars.com/kata/52774a314c2333f0a7000688
 */

function validParentheses(parens) {
  let openParentheses = 0;
  for (let parenthesi of parens) {
    if (parenthesi === '(') openParentheses += 1;
    else if (parenthesi === ')' && openParentheses > 0) openParentheses -= 1;
    else return false;
  }

  return openParentheses === 0;
}

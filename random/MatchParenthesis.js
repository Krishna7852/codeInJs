/**
 * Write a balancedParenthesis function that takes a string as input and
 * returns a boolean — if the parentheses in the input string are ‘balanced’,
 * then return true, else return false. For example, the program should print
 * true for exp = “[()]{}{[()()]()}” and false for exp = “[(])”
 */

const isMatchingBrackets = (braces) => {
  let stack = [];
  let openMatch = '([{<';
  let bracesMap = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>',
  };
  for (let i = 0; i < braces.length; i++) {
    // If character is an opening brace add it to a stack
    if (openMatch.includes(braces[i])) {
      stack.push(braces[i]);
    } else {
      //  If that character is a closing brace, pop from the stack, which will also reduce
      // the length of the stack each time a closing bracket is encountered.
      let last = stack.pop();

      if (braces[i] === bracesMap[last]) {
        return 'YES'; // true
      }
    }
  }
  //If the popped element from the stack, which is the last opening brace match
  // the corresponding closing brace in the map, then return true
  if (stack.length !== 0) {
    return 'NO'; //false
  }

  return 'NO'; // false
};
console.log(isMatchingBrackets('[()]{}{[()()]()}'));
console.log(isMatchingBrackets('{[}]'));

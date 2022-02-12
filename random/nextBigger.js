// Next bigger number with the same digit or Next Highest Number
// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// Input : 3412 , Output: 3421

// Solution: 1
function nextBigger1(n) {
  const sortedDigits = (n) => ('' + n).split('').sort((a, b) => b - a);
  const max = +sortedDigits(n).join('');
  for (let i = n + 1; i <= max; i++) {
    if (max === +sortedDigits(i).join('')) return i;
  }
  return -1;
}

// Solution: 2
function nextBigger(n) {
  console.log(n);
  var chars = n.toString().split('');
  var i = chars.length - 1;
  while (i > 0) {
    if (chars[i] > chars[i - 1]) break;
    i--;
  }
  if (i == 0) return -1;
  var suf = chars.splice(i).sort();
  var t = chars[chars.length - 1];
  for (i = 0; i < suf.length; ++i) {
    if (suf[i] > t) break;
  }
  chars[chars.length - 1] = suf[i];
  suf[i] = t;
  var res = chars.concat(suf);
  var num = parseInt(res.join(''));
  console.log('->' + num);
  return num;
}
console.log('nextBigger::', nextBigger(3121));

// Solution: 3
/**
 * Algorithm:
 *
 *  - move from right to left, one digit (d) at a time
 *  - for each digit (d), compare it to the digits that follow it (again moving from right to left)
 *  - if any following digit (f) is found that is greater than (d), swap their positions and break out of all loops
 *  - sort all the digits that come after (f) (which is now in (d)'s original position)
 *  - done!
 */
// write array `a` onto array `b` starting at position `p`
function overlay(a, b, p) {
  for (let [i, n] of a.entries()) {
    b[p + i] = n;
  }
  return b;
}

// in an array, swap items at indexes i1 and i2
function swap(arr, i1, i2) {
  const [a, b] = [arr[i1], arr[i2]];
  arr[i1] = b;
  arr[i2] = a;
}
function nextBigger(n) {
  let digits = n.toString().split('');

  for_each_digit: for (let i = digits.length - 1; i >= 0; --i) {
    let d = digits[i];
    let lower;

    for_each_trailing_digit: for (let j = digits.length - 1; j > i; --j) {
      if (d < digits[j]) {
        swap(digits, i, j);
        let trailing = digits.slice(i + 1, digits.length);
        trailing.sort();
        overlay(trailing, digits, i + 1);
        break for_each_digit;
      }
    }
  }

  let answer = +digits.join('');

  return n == answer ? -1 : answer;
}

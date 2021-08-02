// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.

/**
 Sample Input: 


STDIN                       Function
-----                       --------
9                           n = 9
10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
 */

/**
  Sample Output:  3
 */

function sockMerchant(n, ar) {
  let stack = new Object();
  let pairCount = 0;

  for (let i = 0; i < n; i++) {
    if (stack[ar[i]]) {
      delete stack[ar[i]];
      pairCount++;
    } else {
      stack[ar[i]] = true;
    }
  }

  return pairCount;
}

function main() {
  const n = 9;

  const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

  let result = sockMerchant(n, ar);

  return result;
}

console.log(main());

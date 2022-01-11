/**
 * Boggle Board
You're given a two-dimensional array (a matrix) of potentially unequal height and width
containing letters; this matrix represents a boggle board. You're also given a list of words.
Write a function that returns an array of all the words contained in the boggle board. The final
words don't need to be in any particular order.
A word is constructed in the boggle board by connecting adjacent (horizontally, vertically, or
diagonally) letters, without using any single letter at a given position more than once; while a
word can of course have repeated letters, those repeated letters must come from different
positions in the boggle board in order for the word to be contained in the board. Note that two or
more words are allowed to overlap and use the same letters in the boggle board.
Sample Input
board = [
 ["t", "h", "i", "s", "i", "s", "a"],
 ["s", "i", "m", "p", "l", "e", "x"],
 ["b", "x", "x", "x", "x", "e", "b"],
 ["x", "o", "g", "g", "l", "x", "o"],
 ["x", "x", "x", "D", "T", "r", "a"],
 ["R", "E", "P", "E", "A", "d", "x"],
 ["x", "x", "x", "x", "x", "x", "x"],
 ["N", "O", "T", "R", "E", "-", "P"],
 ["x", "x", "D", "E", "T", "A", "E"],
],
words = [
 "this", "is", "not", "a", "simple", "boggle",
 "board", "test", "REPEATED", "NOTRE-PEATED",
]
Sample Output
["this", "is", "a", "simple", "boggle", "board", "NOTRE-PEATED"]
// The words could be ordered differently.
 */

// O(nm*8^s + ws) time | O(nm + ws) space
function boggleBoard(board, words) {
  const trie = new Trie();
  for (const word of words) {
    trie.add(word);
  }
  const finalWords = {};
  const visited = board.map((row) => row.map((letter) => false));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      explore(i, j, board, trie.root, visited, finalWords);
    }
  }
  return Object.keys(finalWords);
}
function explore(i, j, board, trieNode, visited, finalWords) {
  if (visited[i][j]) return;
  const letter = board[i][j];
  if (!(letter in trieNode)) return;
  visited[i][j] = true;
  trieNode = trieNode[letter];
  if ('*' in trieNode) finalWords[trieNode['*']] = true;
  const neighbors = getNeighbors(i, j, board);
  for (const neighbor of neighbors) {
    explore(neighbor[0], neighbor[1], board, trieNode, visited, finalWords);
  }
  visited[i][j] = false;
}
function getNeighbors(i, j, board) {
  const neighbors = [];
  if (i > 0 && j > 0) {
    neighbors.push([i - 1, j - 1]);
  }
  if (i > 0 && j < board[0].length - 1) {
    neighbors.push([i - 1, j + 1]);
  }
  if (i < board.length - 1 && j < board[0].length - 1) {
    neighbors.push([i + 1, j + 1]);
  }
  if (i < board.length - 1 && j > 0) {
    neighbors.push([i + 1, j - 1]);
  }
  if (i > 0) {
    neighbors.push([i - 1, j]);
  }
  if (i < board.length - 1) {
    neighbors.push([i + 1, j]);
  }
  if (j > 0) {
    neighbors.push([i, j - 1]);
  }
  if (j < board[0].length - 1) {
    neighbors.push([i, j + 1]);
  }
  return neighbors;
}
class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }
  add(word) {
    let current = this.root;
    for (const letter of word) {
      if (!(letter in current)) current[letter] = {};
      current = current[letter];
    }
    current[this.endSymbol] = word;
  }
}

// Test the program
const board = [
  ['t', 'h', 'i', 's', 'i', 's', 'a'],
  ['s', 'i', 'm', 'p', 'l', 'e', 'x'],
  ['b', 'x', 'x', 'x', 'x', 'e', 'b'],
  ['x', 'o', 'g', 'g', 'l', 'x', 'o'],
  ['x', 'x', 'x', 'D', 'T', 'r', 'a'],
  ['R', 'E', 'P', 'E', 'A', 'd', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['N', 'O', 'T', 'R', 'E', '-', 'P'],
  ['x', 'x', 'D', 'E', 'T', 'A', 'E'],
];
const words = [
  'this',
  'is',
  'not',
  'a',
  'simple',
  'boggle',
  'board',
  'test',
  'REPEATED',
  'NOTRE-PEATED',
];
const expected = [
  'this',
  'is',
  'a',
  'simple',
  'boggle',
  'board',
  'NOTRE-PEATED',
];
const actual = boggleBoard(board, words);
console.log('Match the Length::', actual.length, expected.length);
for (const word of actual) {
  console.log('Output::', actual.includes(word)); // true
}
exports.boggleBoard = boggleBoard;

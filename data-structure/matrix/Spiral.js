// Approch: 1
const  spiral = (matrix) => {
  let list = [];

  while (matrix.length > 1) {
    //Right
    list = list.concat(matrix.splice(0, 1)[0]);

    //Down
    for (let idx in matrix) {
      list.push(matrix[idx].splice(-1)[0]);
    }

    //Left
    list = list.concat(matrix.splice(-1, 1)[0].reverse());

    //Up
    for (let idx = matrix.length - 1; idx >= 0; idx--) {
      list.push(matrix[idx].splice(0, 1)[0]);
    }
  }

  if (matrix.length > 0) {
    list.push(matrix.pop()[0]);
  }

  return list;
}


// Approch: 2 | Spiral Array in (ES6) - Only for 3 x 3 matrix
const spiralArr = (matrix) => {
    const arr = [];
    while (matrix.length) {
      arr.push(
        ...matrix.shift(), // Left
        ...matrix.map(a => a.pop()), //Down
        ...(matrix.pop() || []).reverse(), // Right
        ...matrix.map(a => a.shift()).reverse() // Up
      );
    }
    return arr;
  }

// setup a matrix
let M = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.table([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// return it in spiral order
console.table(spiralArr(M));

/**
 * Merge Sort is a Divide and Conquer algorithm.
 * It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
 * The merge() function is used for merging two halves.
 */

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  const center = Math.floor(arr.length / 2);

  const left = arr.slice(0, center);

  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
};

// Sort first and second halves
const merge = (left, right) => {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
};


console.log(mergeSort([3,2,4,6,5]));
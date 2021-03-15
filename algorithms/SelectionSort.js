/** 
The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.
The algorithm maintains two subarrays in a given array.

1) The subarray which is already sorted.
2) Remaining subarray which is unsorted.

In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.
*/

/**
 * Time Complexity: O(n2) as there are two nested loops.

 * Auxiliary Space: O(1)
  The good thing about selection sort is it never makes more than O(n) swaps and can
   be useful when memory write is a costly operation.
 */

const selectionSort = (...arr) => {
  // One by one move boundary of unsorted subarray
  for (let i = 0; i < arr.length; i++) {
    // Find the minimum element in unsorted array
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    // Swap the found minimum element with the first element
    if (indexOfMin !== i) {
      [arr[indexOfMin], arr[i]] = [arr[i], arr[indexOfMin]];
      //  let lesser = arr[indexOfMin];
      //  arr[indexOfMin] = arr[i];
      //  arr[i] = lesser;
    }
  }
  console.log(arr);
};

selectionSort(4, 5, 7, 2, 4, 1);

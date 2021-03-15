/**
 * Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the
 *  adjacent elements if they are in wrong order.
 *
 */

/**
  * Worst and Average Case Time Complexity: O(n*n). Worst case occurs when array is reverse sorted.

  * Best Case Time Complexity: O(n). Best case occurs when array is already sorted.

  * Auxiliary Space: O(1)

  * Boundary Cases: Bubble sort takes minimum time (Order of n) when elements are already sorted.
  */

// A function to implement bubble sort
const bubbleSort = (...arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swapping the element
      }
    }
  }
  console.table({sorted: arr});
};

bubbleSort(3, 4, 2, 6, 8, 7);

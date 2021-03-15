/**
 * Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. 
 * The array is virtually split into a sorted and an unsorted part.
 *  Values from the unsorted part are picked and placed at the correct position in the sorted part.
  Algorithm 
To sort an array of size n in ascending order: 
1: Iterate from arr[1] to arr[n] over the array. 
2: Compare the current element (key) to its predecessor. 
3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.
 */


 /**
  * Time Complexity: O(n*2) 
  * Auxiliary Space: O(1)
  * Boundary Cases: Insertion sort takes maximum time to sort if elements are sorted in reverse order. And it takes minimum time (Order of n) when elements are already sorted.
  * Algorithmic Paradigm: Incremental Approach
  */

const insertionSort = (arr) => {
  let len = arr.length, // number of items in the array
    value, // the value currently being compared
    i, // index into unsorted section
    j; // index into sorted section

  for (i = 1; i < len; i++) {
    // store the current value because it may shift later
    value = arr[i];
    j = i - 1;

    // Whenever the value in the sorted section is greater than the value
    // in the unsorted section, shift all items in the sorted section over
    // by one. This creates space in which to insert the value.
    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = value;
  }

  console.table(arr);
  return arr;
};

insertionSort([5, 6, 3, 2, 8]);

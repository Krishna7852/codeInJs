/**
 * Sort K-Sorted Array
Write a function that takes in a non-negative integer k and a k-sorted array of integers and returns
the sorted version of the array. Your function can either sort the array in place or create an entirely
new array.
A k-sorted array is a partially sorted array in which all elements are at most k positions away from
their sorted position. For example, the array [3, 1, 2, 2] is k-sorted with k = 3 , because
each element in the array is at most 3 positions away from its sorted position.
Note that you're expected to come up with an algorithm that can sort the k-sorted array faster
than in O(nlog(n)) time.
Sample Input
array = [3, 2, 1, 5, 4, 7, 6, 5]
k = 3
Sample Output
[1, 2, 3, 4, 5, 5, 6, 7]
 */
// O(nlog(k)) time | O(k) space - where n is the number
// of elements in the array and k is how far away elements
// are from their sorted position
function sortKSortedArray(array, k) {
  const minHeapWithKElements = new MinHeap(
    array.slice(0, Math.min(k + 1, array.length))
  );
  let nextIndexToInsertElement = 0;
  for (let idx = k + 1; idx < array.length; idx++) {
    const minElement = minHeapWithKElements.remove();
    array[nextIndexToInsertElement] = minElement;
    nextIndexToInsertElement++;
    const currentElement = array[idx];
    minHeapWithKElements.insert(currentElement);
  }
  while (!minHeapWithKElements.isEmpty()) {
    const minElement = minHeapWithKElements.remove();
    array[nextIndexToInsertElement] = minElement;
    nextIndexToInsertElement++;
  }
  return array;
}
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }
  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }
  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
  peek() {
    return this.heap[0];
  }
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}

exports.sortKSortedArray = sortKSortedArray;

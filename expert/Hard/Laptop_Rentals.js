/**
 * Laptop Rentals
You're given a list of time intervals during which students at a school need a laptop. These time
intervals are represented by pairs of integers [start, end] , where 0 <= start < end .
However, start and end don't represent real times; therefore, they may be greater than 24 .
No two students can use a laptop at the same time, but immediately after a student is done using a
laptop, another student can use that same laptop. For example, if one student rents a laptop during
the time interval [0, 2] , another student can rent the same laptop during any time interval
starting with 2 .
Write a function that returns the minimum number of laptops that the school needs to rent such
that all students will always have access to a laptop when they need one.
Sample Input
times =
[
 [0, 2],
 [1, 4],
 [4, 6],
 [0, 4],
 [7, 8],
 [9, 11],
 [3, 10],
]
Sample Output
3
 */
// O(nlog(n)) time | O(n) space - where n is the number of times
function laptopRentals(times) {
  if (times.length === 0) return 0;
  times.sort((a, b) => a[0] - b[0]);
  const timesWhenLaptopIsUsed = [times[0]];
  const heap = new MinHeap(timesWhenLaptopIsUsed);
  for (let idx = 1; idx < times.length; idx++) {
    const currentInterval = times[idx];
    if (heap.peek()[1] <= currentInterval[0]) heap.remove();
    heap.insert(currentInterval);
  }
  return timesWhenLaptopIsUsed.length;
}
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }
  // O(n) time | O(1) space
  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }
  // O(log(n)) time | O(1) space
  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx][1] < heap[childOneIdx][1]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
        if (heap[idxToSwap][1] < heap[currentIdx][1]) {
          this.swap(currentIdx, idxToSwap, heap);
          currentIdx = idxToSwap;
          childOneIdx = currentIdx * 2 + 1;
        } else {
          return;
        }
      }
    }
  }
  // O(log(n)) time | O(1) space
  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx][1] < heap[parentIdx][1]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
  // O(1) time | O(1) space
  peek() {
    return this.heap[0];
  }
  // O(log(n)) time | O(1) space
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }
  // O(log(n)) time | O(1) space
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

exports.laptopRentals = laptopRentals;
exports.MinHeap = MinHeap;

// Alternate Solution
// O(nlog(n)) time | O(n) space - where n is the number of times
function laptopRentals(times) {
  if (times.length === 0) return 0;
  let usedLaptops = 0;
  const startTimes = times.map((a) => a[0]).sort((a, b) => a - b);
  const endTimes = times.map((a) => a[1]).sort((a, b) => a - b);
  let startIterator = 0;
  let endIterator = 0;
  while (startIterator < times.length) {
    if (startTimes[startIterator] >= endTimes[endIterator]) {
      usedLaptops--;
      endIterator++;
    }
    usedLaptops++;
    startIterator++;
  }
  return usedLaptops;
}
exports.laptopRentals = laptopRentals;

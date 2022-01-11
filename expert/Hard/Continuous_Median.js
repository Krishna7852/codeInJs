/**
 * Continuous Median
Write a ContinuousMedianHandler class that supports:
The continuous insertion of numbers with the insert method.
The instant (O(1) time) retrieval of the median of the numbers that have been inserted thus
far with the getMedian method.
The getMedian method has already been written for you. You simply have to write the
insert method.
The median of a set of numbers is the "middle" number when the numbers are ordered from
smallest to greatest. If there's an odd number of numbers in the set, as in {1, 3, 7} , the
median is the number in the middle ( 3 in this case); if there's an even number of numbers in the
set, as in {1, 3, 7, 8} , the median is the average of the two middle numbers (
(3 + 7) / 2 == 5 in this case).
Sample Usage
// All operations below are performed sequentially.
ContinuousMedianHandler(): - // instantiate a ContinuousMedianHandler
insert(5): -
insert(10): -
getMedian(): 7.5
insert(100): -
getMedian(): 10
 */

class ContinuousMedianHandler {
  constructor() {
    this.lowers = new Heap(MAX_HEAP_FUNC, []);
    this.greaters = new Heap(MIN_HEAP_FUNC, []);
    this.median = null;
  }
  // O(log(n)) time | O(n) space
  insert(number) {
    if (!this.lowers.length || number < this.lowers.peek()) {
      this.lowers.insert(number);
    } else {
      this.greaters.insert(number);
    }
    this.rebalanceHeaps();
    this.updateMedian();
  }
  rebalanceHeaps() {
    if (this.lowers.length - this.greaters.length === 2) {
      this.greaters.insert(this.lowers.remove());
    } else if (this.greaters.length - this.lowers.length === 2) {
      this.lowers.insert(this.greaters.remove());
    }
  }
  updateMedian() {
    if (this.lowers.length === this.greaters.length) {
      this.median = (this.lowers.peek() + this.greaters.peek()) / 2;
    } else if (this.lowers.length > this.greaters.length) {
      this.median = this.lowers.peek();
    } else {
      this.median = this.greaters.peek();
    }
  }
  getMedian() {
    return this.median;
  }
}
class Heap {
  constructor(comparisonFunc, array) {
    this.comparisonFunc = comparisonFunc;
    this.heap = this.buildHeap(array);
    this.length = this.heap.length;
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
      if (childTwoIdx !== -1) {
        if (this.comparisonFunc(heap[childTwoIdx], heap[childOneIdx])) {
          idxToSwap = childTwoIdx;
        } else {
          idxToSwap = childOneIdx;
        }
      } else {
        idxToSwap = childOneIdx;
      }
      if (this.comparisonFunc(heap[idxToSwap], heap[currentIdx])) {
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
    while (currentIdx > 0) {
      if (this.comparisonFunc(heap[currentIdx], heap[parentIdx])) {
        this.swap(currentIdx, parentIdx, heap);
        currentIdx = parentIdx;
        parentIdx = Math.floor((currentIdx - 1) / 2);
      } else {
        return;
      }
    }
  }
  peek() {
    return this.heap[0];
  }
  remove() {
    this.swap(0, this.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.length--;
    this.siftDown(0, this.length - 1, this.heap);
    return valueToRemove;
  }
  insert(value) {
    this.heap.push(value);
    this.length++;
    this.siftUp(this.length - 1, this.heap);
  }
  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}
function MAX_HEAP_FUNC(a, b) {
  return a > b;
}
function MIN_HEAP_FUNC(a, b) {
  return a < b;
}
exports.ContinuousMedianHandler = ContinuousMedianHandler;

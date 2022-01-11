/**
 * Find Nodes Distance K.
You're given the root node of a Binary Tree, a target value of a node that's contained in the
tree, and a positive integer k . Write a function that returns the values of all the nodes that are
exactly distance k from the node with target value.
The distance between two nodes is defined as the number of edges that must be traversed to go
from one node to the other. For example, the distance between a node and its immediate left or
right child is 1 . The same holds in reverse: the distance between a node and its parent is 1 . In a
tree of three nodes where the root node has a left and right child, the left and right children are
distance 2 from each other.
Each BinaryTree node has an integer value , a left child node, and a right child node.
Children nodes can either be BinaryTree nodes themselves or None / null .
Note that all BinaryTree node values will be unique, and your function can return the output
values in any order.

Sample Input
tree =  1
       / \
      2   3
     / \   \
    4   5   6
   / \
  7   8
target = 3
k = 2
Sample Output
[2, 7, 8] // These values could be ordered differently.
 */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// O(n) time | O(n) space - where n is the number of nodes in the tree
function findNodesDistanceK(tree, target, k) {
  const nodesToParents = {};
  populateNodesToParents(tree, nodesToParents);
  const targetNode = getNodeFromValue(target, tree, nodesToParents);
  return breadthFirstSearchForNodesDistanceK(targetNode, nodesToParents, k);
}
function breadthFirstSearchForNodesDistanceK(targetNode, nodesToParents, k) {
  // We could use a more legitimate queue structure instead of a standard
  // array if we wanted to optimize our `.shift() operations.`
  const queue = [[targetNode, 0]];
  const seen = new Set([targetNode.value]);
  while (queue.length > 0) {
    const [currentNode, distanceFromTarget] = queue.shift();
    if (distanceFromTarget === k) {
      const nodesDistanceK = queue.map((pair) => pair[0].value);
      nodesDistanceK.push(currentNode.value);
      return nodesDistanceK;
    }
    const connectedNodes = [
      currentNode.left,
      currentNode.right,
      nodesToParents[currentNode.value],
    ];
    for (const node of connectedNodes) {
      if (node === null) continue;
      if (seen.has(node.value)) continue;
      seen.add(node.value);
      queue.push([node, distanceFromTarget + 1]);
    }
  }
  return [];
}
function getNodeFromValue(value, tree, nodesToParents) {
  if (tree.value === value) return tree;
  const nodeParent = nodesToParents[value];
  if (nodeParent.left !== null && nodeParent.left.value === value)
    return nodeParent.left;
  return nodeParent.right;
}
function populateNodesToParents(node, nodesToParents, parent = null) {
  if (node !== null) {
    nodesToParents[node.value] = parent;
    populateNodesToParents(node.left, nodesToParents, node);
    populateNodesToParents(node.right, nodesToParents, node);
  }
}

// Test the Program
const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.right = new BinaryTree(6);
root.right.right.left = new BinaryTree(7);
root.right.right.right = new BinaryTree(8);
const target = 3;
const k = 2;
const expected = [2, 7, 8];
const actual = findNodesDistanceK(root, target, k);
actual.sort();
console.log('actual:::', actual);
console.log('expected:::', expected);

// exports.BinaryTree = BinaryTree;
// exports.findNodesDistanceK = findNodesDistanceK;

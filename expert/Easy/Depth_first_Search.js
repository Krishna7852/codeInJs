/**
 * Depth-first Search (DFS)
You're given a Node class that has a name and an array of optional children
nodes. When put together, nodes form an acyclic tree-like structure.
Implement the depthFirstSearch method on the Node class, which takes in an
empty array, traverses the tree using the Depth-first Search approach (specifically
navigating the tree from left to right), stores all of the nodes' names in the input array,
and returns it.
If you're unfamiliar with Depth-first Search, we recommend watching the Conceptual
Overview section of this question's video explanation before starting to code.
Sample Input
graph = A
      / | \
      B C D
     / \ / \
     E F G H
      / \ \
     I   J K
Sample Output
["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]
 */

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
  // O(v + e) time | O(v) space
  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}
exports.Node = Node;

//    Test the Program
const graph = new Node('A');
graph.addChild('B').addChild('C').addChild('D');
graph.children[0].addChild('E').addChild('F');
graph.children[2].addChild('G').addChild('H');
graph.children[0].children[1].addChild('I').addChild('J');
graph.children[2].children[0].addChild('K');
console.log(graph.depthFirstSearch([]));
//    chai.expect(graph.depthFirstSearch([])).to.deep.equal(['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H']);

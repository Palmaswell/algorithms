import { Node } from "./node.js";

// A binary tree  has  a root Node
// There is only one unique path between any two nodes
//     a
//    / \
//   b   c
//  / \   \
// d   e   f
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/**
 * @name Breadth-first Search
 * @description The breadth-first search algorithm starts at the root level of
 * the binary tree and traverse all the nodes from one level left to right
 * before moving to the next level.
 **/

function breadthFirstSearch(root) {
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.value);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
}

// should return a b c d e f
breadthFirstSearch(a);

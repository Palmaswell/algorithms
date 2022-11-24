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

function deepFirstSearch(node) {
  const stack = [node];

  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node.value);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }
}

deepFirstSearch(a);

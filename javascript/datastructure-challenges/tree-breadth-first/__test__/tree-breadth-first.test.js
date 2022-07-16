'use strict';
const Node = require('../node');
const{ BinaryTree } = require('../binary-tree');
describe('Binary tree tests', () => {
  const tree = new BinaryTree();
  tree.root = new Node(15);
  tree.root.left = new Node(10);
  tree.root.left.left = new Node(7);
  tree.root.left.right = new Node(13);
  tree.root.left.left.left = new Node(5);
  tree.root.left.left.right = new Node(9);
  tree.root.right = new Node(25);
  tree.root.right.left = new Node(22);
  tree.root.right.right = new Node(27);
  tree.root.right.left.left = new Node(17);

  test('Can successfully return a collection from a breadth first traversal', () => {
    expect(tree.breadthFirst()).toEqual([15,10,7,13,5,9,25,22,27,17]);
  });

  test('Raises an error if tree is empty', () => {
    const tree = new BinaryTree();
    expect(tree.breadthFirst()).toEqual('Empty tree');
  });
});

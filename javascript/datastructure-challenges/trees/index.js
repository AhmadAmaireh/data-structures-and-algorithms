'use strict';
const BinaryTree = require('./binary-tree');
const BinarySearchTree = require('./binary-tree');
const Node = require('./node');

// binary search tree
let ten = new Node(10);
let sixteen = new Node(16);
let twenty = new Node(20);
let thirty = new Node(13);
let fivteen = new Node(15);
let twelve = new Node(12);
let seventeen = new Node(17);

ten.left = sixteen;
ten.right = fivteen;
sixteen.left = twenty;
sixteen.right = thirty;
fivteen.left = twelve;
fivteen.right = seventeen;

let tree2 = null;

tree2 = new BinarySearchTree(ten);

let preOrderbst = tree2.preOrder();
console.log('pre order for Binary search tree: ', preOrderbst);
//pre order > 10 , 16 , 20 , 13 , 15 , 12 , 17




// binary tree
let tree = null;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

tree = new BinaryTree(one);

let preOrder = tree.preOrder();
console.log('pre order for Binary tree: ', preOrder);
// //pre order > 1 , 2 , 6 , 7 , 8 , 9 , 3 , 4 , 5

let inOrder = tree.inOrder();
console.log('in order for Binary tree: ', inOrder);
//pre order > 6 , 8 , 7 , 9 , 2 , 1 , 4 , 3 , 5


let postOrder = tree.postOrder();
console.log('post order for Binary tree: ', postOrder);
//pre order > 8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1

'use strict';
const LinkedList = require('./linked-list/lib/linkedlist');

const ll = new LinkedList();

ll.insert(10);
ll.insert(20);
ll.insert(30);

ll.append(90);

ll.insertBefore(20,70);

ll.insertAfter(20,150);

console.log(ll.toString());

console.log(25,ll.includes(25));
console.log(10,ll.includes(10));

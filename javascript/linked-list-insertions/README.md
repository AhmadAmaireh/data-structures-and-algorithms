## Challenge Setup & Execution
Branch Name: linked-list-insertions

Challenge Type: Extending an Implementation

# Feature Tasks
Write the following methods for the Linked List class:

# append
arguments: new value
adds a new node with the given value to the end of the list

# insert before
arguments: value, new value
adds a new node with the given new value immediately before the first node that has the value specified

# insert after
arguments: value, new value
adds a new node with the given new value immediately after the first node that has the value specified

# Examples

* Append

Initial List	Method Args	Resulting List
head -> {1} -> {3} -> {2} -> X	5	head -> {1} -> {3} -> {2} -> {5} -> X
head -> X	1	head -> {1} -> X

* Insert Before

Initial List	Method Args	Resulting List
head -> {1} -> {3} -> {2} -> X	3, 5	head -> {1} -> {5} -> {3} -> {2} -> X
head -> {1} -> {3} -> {2} -> X	1, 5	head -> {5} -> {1} -> {3} -> {2} -> X
head -> {1} -> {2} -> {2} -> X	2, 5	head -> {1} -> {5} -> {2} -> {2} -> X
head -> {1} -> {3} -> {2} -> X	4, 5	No change, method exception

* Insert After

Initial List	Method Args	Resulting List
head -> {1} -> {3} -> {2} -> X	3, 5	head -> {1} -> {3} -> {5} -> {2} -> X
head -> {1} -> {3} -> {2} -> X	2, 5	head -> {1} -> {3} -> {2} -> {5} -> X
head -> {1} -> {2} -> {2} -> X	2, 5	head -> {1} -> {2} -> {5} -> {2} -> X
head -> {1} -> {3} -> {2} -> X	4, 5	No change, method exception
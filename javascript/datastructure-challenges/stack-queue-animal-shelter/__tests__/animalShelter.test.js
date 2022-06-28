'use strict';
const Queue = require('../lib/AnimalShelter');

describe('Linked Queue Test', () => {

  test('Can successfully enqueue into a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue("cat");
    expect(newQueue.animal.front.value).toBe("cat");
  });
  test('Can successfully enqueue multiple values into a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue("cat");
    newQueue.enqueue("cat");
    newQueue.enqueue("dog");
    expect(newQueue.animal.front.value).toBe("cat");
    expect(newQueue.animal.front.next.value).toBe("cat");
    expect(newQueue.animal.rear.value).toBe("dog");
  });
  test('Can successfully dequeue out of a queue the expected value', () => {
    const newQueue = new Queue();
    newQueue.enqueue("cat");
    newQueue.dequeue("cat");
    expect(newQueue.animal.front).toBeNull();
  });
  test('Can successfully empty a queue after multiple dequeues', () => {
    const newQueue = new Queue();
    newQueue.enqueue("cat");
    newQueue.enqueue("cat");
    newQueue.enqueue("cat");
    newQueue.dequeue("cat");
    newQueue.dequeue("cat");
    newQueue.dequeue("cat");
    expect(newQueue.animal.front).toBeNull();
  });
  test('Can successfully instantiate an empty queue', () => {
    const newQueue = new Queue();
    expect(newQueue instanceof Queue).toBeTruthy();
  });
  test('Calling dequeue or peek on empty queue raises exception', () => {
    const newQueue = new Queue();
    expect(newQueue.animal.dequeue()).toBe('exception');
    expect(newQueue.animal.peek()).toBe('exception');
  });

});

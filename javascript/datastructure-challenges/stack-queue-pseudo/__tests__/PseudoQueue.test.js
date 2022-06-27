'use strict';

const PseudoQueue = require('../lib/PseudoQueue');

describe('PseudoQueue Test', () => {

  test('Can successfully enqueue into a queue', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    expect(newQueue.input.peek()).toBe(1);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(5);
    newQueue.enqueue(7);
    expect(newQueue.input.peek()).toBe(7);
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    newQueue.dequeue();
    expect(newQueue.input.peek()).toBe("exception");
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    expect(newQueue.input.peek()).toBe(2);
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(5);
    newQueue.enqueue(7);
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.output.pop()).toBe("exception");
  });

  test('Can successfully instantiate an empty queue', () => {
    const newQueue = new PseudoQueue();
    expect(newQueue instanceof PseudoQueue).toBeTruthy();
  });

  test('Calling dequeue or peek on empty queue raises exception', () => {
    const newQueue = new PseudoQueue();
    expect(newQueue.dequeue()).toBe("Cant dequeue : Both stacks are empty");
    // expect(newQueue.peek()).toBe('exception');
  });

});


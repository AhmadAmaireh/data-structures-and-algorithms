'use strict';
const Stack = require('../lib/Stack');

describe('Linked List Test', () => {

  test('Can successfully push onto a stack', () => {
    const newStack = new Stack();
    newStack.push(1);
    expect(newStack.top.value).toBe(1);
  });

  test('Can successfully push multiple values onto a stack', () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(5);
    newStack.push(7);
    expect(newStack.top.value).toBe(7);
    expect(newStack.top.next.value).toBe(5);
    expect(newStack.top.next.next.value).toBe(1);
  });

  test('Can successfully pop off the stack', () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.pop();
    expect(newStack.top).toBeNull();
  });

  test('Can successfully empty a stack after multiple pops', () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(5);
    newStack.push(7);
    newStack.pop();
    newStack.pop();
    newStack.pop();
    expect(newStack.top).toBeNull();
  });

  test('Can successfully peek the next item on the stack', () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.peek();
    expect(newStack.top.next.value).toBe(1);
  });

  test('Can successfully instantiate an empty stack', () => {
    const newStack = new Stack();
    expect(newStack instanceof Stack).toBeTruthy();
  });

  test('Calling pop or peek on empty stack raises exception', () => {
    const newStack = new Stack();
    expect(newStack.pop()).toBe('exception');
    expect(newStack.peek()).toBe('exception');
  });

});

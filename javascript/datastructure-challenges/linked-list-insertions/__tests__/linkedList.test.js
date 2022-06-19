'use strict';
const LinkedList = require('../lib/linkedlistInsertions');

describe('Linked List Test', () => {
  test('Test01:Can successfully add a node to the end of the linked list', () => {
    let ll = new LinkedList();
    ll.insert('10');
    ll.insert('20');
    ll.insert('30');
    ll.append('40');
    expect(ll.toString()).toBe('{10} -> {20} -> {30} -> {40} -> NULL');
  });
  test('Test02:Can successfully add multiple nodes to the end of a linked list', () => {
    let ll = new LinkedList();
    ll.insert('10');
    ll.insert('20');
    ll.insert('30');
    ll.append('40');
    ll.append('50');
    expect(ll.toString()).toBe('{10} -> {20} -> {30} -> {40} -> {50} -> NULL');

  });
  test('Test03:Can successfully insert a node before a node located in the middle of a linked list', () => {
    let ll = new LinkedList();
    ll.insert('10');
    ll.insert('20');
    ll.insert('30');
    ll.insertBefore('20', '15');
    expect(ll.toString()).toBe('{10} -> {15} -> {20} -> {30} -> NULL');
  });
  test('Test04:Can successfully insert a node before the first node of a linked list', () => {
    let ll = new LinkedList();
    ll.insert('10');
    ll.insert('20');
    ll.insert('30');
    ll.insertBefore('10', '5');
    expect(ll.toString()).toBe('{5} -> {10} -> {20} -> {30} -> NULL');
  });
  test('Test05:Can successfully insert after a node in the middle of the linked list', () => {
    let ll = new LinkedList();
    ll.insert('10');
    ll.insert('20');
    ll.insert('30');
    ll.insertAfter('20', '15');
    expect(ll.toString()).toBe('{10} -> {20} -> {25} -> {30} -> NULL');
  });
  test('Test06:Can successfully insert a node after the last node of the linked list', () => {
    let ll = new LinkedList();
    ll.insert('10');
    ll.insert('20');
    ll.insert('30');
    ll.insertAfter('30', '40');
    expect(ll.toString()).toBe('{10} -> {20} -> {30} -> {40} -> NULL');
  });
});

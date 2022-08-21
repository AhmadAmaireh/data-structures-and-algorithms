'use strict';

const Hashmap = require('../hashTable');
const hashedTable = new Hashmap(10);

describe('Hash Table Test', () => {

  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    hashedTable.set('Ahmad', 'student1');
    expect(hashedTable.get('Ahmad')).toBe('student1');
  });

  test('Retrieving based on a key returns the value stored', () => {
    hashedTable.set('Esam', 'student2');
    expect(hashedTable.get('Esam')).toBe('student2');
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    hashedTable.set('Esam', 'student2');
    expect(hashedTable.get('Taim')).toBeNull();
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const table = new Hashmap(10);
    table.set('Ahmad', 'student1');
    table.set('Esam', 'student2');
    table.set('Mohamad', 'student3');
    table.set('Taim', 'student4');
    table.set('Laith', 'student5');
    expect(table.keys().length).toBe(5);
  });

  test('Successfully handle a collision within the hashtable', () => {
    hashedTable.set('nur', 'name');
    hashedTable.set('run', 'action');
    expect(hashedTable.contains('nur')).toBeTruthy();
    expect(hashedTable.contains('run')).toBeTruthy();
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    hashedTable.set('nur', 'name');
    hashedTable.set('run', 'action');
    expect(hashedTable.contains('nur')).toBeTruthy();
    expect(hashedTable.get('nur')).toBe('name');
    expect(hashedTable.contains('run')).toBeTruthy();
    expect(hashedTable.get('run')).toBe('action');
  });

  test('Successfully hash a key to an in-range value', () => {
    hashedTable.set('Laith', 'student5');
    expect(hashedTable.hash('Laith')).toBeLessThan(10);
  });

});

## Hashtables
Hashtables are a data structure that utilize key value pairs. This means every Node or Bucket has both a key, and a value.

The basic idea of a hashtable is the ability to store the key into this data structure, and quickly retrieve the value. This is done through what we call a hash. A hash is the ability to encode the key that will eventually map to a specific location in the data structure that we can look at directly to retrieve the value.

Since we are able to hash our key and determine the exact location where our value is stored, we can do a lookup in an O(1) time complexity. This is ideal when quick lookups are required.

Creating a Hash
A hashtable traditionally is created from an array. I always like the size 1024. this is important for index placement. After you have created your array of the appropriate size, do some sort of logic to turn that “key” into a numeric number value. Here is a simplistic hashing algorithm:

Add or multiply all the ASCII values together.
Multiply it by a prime number such as 599.
Use modulo to get the remainder of the result, when divided by the total size of the array.
Insert into the array at that index.

---
# Challenge
Implement a Hashtable Class

### Write tests to prove the following functionality:
✓ Setting a key/value to your hashtable results in the value being in the data structure.

✓ Retrieving based on a key returns the value stored.

✓ Successfully returns null for a key that does not exist in the hashtable.

✓ Successfully returns a list of all unique keys that exist in the hashtable.

✓ Successfully handle a collision within the hashtable.

✓ Successfully retrieve a value from a bucket within the hashtable that has a collision.

✓ Successfully hash a key to an in-range value.

# Approach & Efficiency
Time: O(1) => constant time

Space: O(n) => linear space

# API
Hash Table Methods :
* set

    * Arguments: key, value
    * Returns: nothing
    * This method should hash the key, and set the key and value pair in the table, handling collisions as needed. Should a given key already exist, replace its value from the value argument given to this method.

* get

   * Arguments: key
   * Returns: Value associated with that key in the table

* contains

    * Arguments: key
    * Returns: Boolean, indicating if the key exists in the table already.

* keys

    * Returns: Collection of keys

* hash

    * Arguments: key
    * Returns: Index in the collection for that key
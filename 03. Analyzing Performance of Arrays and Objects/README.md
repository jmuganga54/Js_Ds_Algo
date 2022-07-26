## Topic
### Now that we've covered BIG O...
Let's spend a couple minutes analyzing the things we do all the time in Js: working with Arrays, Objects, and built in methods.

### OBJECTIVES
* Understand how objects and arrays work, through the lens of Big O

* Explain why adding elements to the beginning of an array is costly.

* Compare and contrast the runtime for arrays and objects, as well as built in methods.

## Key points and Notes

### OBJECTS
So they are unordered data structures and everything is stored in `key value pairs`.

#### When to use objects
* When you don't need order
* When you need fast access / insertion and removal

#### Big O Of Objects
* Insertion - O(1)
* Removal - O(1)
* Searching - O(N)
* Access - O(1)

> When you don't need any ordering, objects are an excellent choice.

#### Big O of Object Methods
* Object.keys - O(N)
* Object.values - O(N)
* Object.entries -  O(N)
* hasOwnProperty - O(1)

```
let instructor = {
    firstName : "kelly",
    isInstructor: true,
    favoriteNumbers : [1,2,3,4]
}

Object.keys(instructor) //O(N)
//(3) ['firstName', 'isInstructor', 'favoriteNumbers']

Object.values(instructor)
// (3) ['kelly', true, Array(4)]
// 0: "kelly"
// 1: true
// 2: (4) [1, 2, 3, 4]
// length: 3

Object.entries(instructor) //O(N)
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ['firstName', 'kelly']
// 1: (2) ['isInstructor', true]
// 2: (2) ['favoriteNumbers', Array(4)]
// length: 3

instructor.hasOwnProperty("firstName")
// true

```






## Summary
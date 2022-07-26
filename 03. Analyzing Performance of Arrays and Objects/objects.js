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
## Topics
> So this section is a continuation or it accompanies a previous section they're meant to go together.

## Keywords && Notes
### HOW DO YOU IMPROVE?
> How do you even approach a difficult problem how do you get better at solving them.

1. `Devise` a plan for solving problems `[checked]`
2. `Master` common problem solving patterns

#### PROBLEM SOLVING PATTERNS
##### SOME PATTERNS...
* Frequency Counter
* Multiple Pointers
* Sliding Window
* Divide and Conquer
* Dynamic Programming
* Greedy Algorithms
* Backtracking
* `Many more!`

I like to think of them as sort of programming mechanisms different pieces that you can put in or a blueprint.

### FREQUENCY COUNTERS
This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loop or `O(N^2)` operations with arrays /strings

> This is useful algorithms when you have multiple pieces of data, multiple inputs which you need to compare them to see if they consists of similar values.
>
> If a values is contained inside of another value, anytime you're comparing piece of data to inputs or more than two and frequencies of certain things occur.

> Example
Write a function called `same`, which accepts two arrays. The function should return if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

```
function same(arr1,arr2){
    //Length of the compared arrays must be the same
    if(arr1.length !== arr2.length){
        return false
    }
    //frequency - how many times an item appeared in an array
    //object which will count the frequency of each item in an array
    //Input:[1,2,3,2] output:{'1':1, '2':2, '3':1}
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    //iterating each items of arr1 create and assign frequency of each item
    for(let va1 of arr1){
        frequencyCounter1[va1] = (frequencyCounter1[va1] || 0) + 1
        debugger;
    }

    //iterating each items of arr2 create and assign frequency of each item
    for(let va1 of arr2){
        frequencyCounter2[va1] = (frequencyCounter2[va1] || 0) + 1
    }

    //objected created of each array 
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    
    //iterating all the keys of object frequencyCounter1
    for(let key in frequencyCounter1){
        // After squaring a key, is this found in object frequencyCounter2
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        //Does its values correspond 
        if(frequencyCounter2[key** 2] !== frequencyCounter1[key]){
            return false
        } 
    }

  
    return true
}

console.log(same([1,2,3,2,5],[9,1,4,4,11]))



//Expected ouput:
{ '1': 1, '2': 2, '3': 1, '5': 1 }
{ '1': 1, '4': 2, '9': 1, '11': 1 }
false

```

 So the idea behind the `frequency counter` usually use an object and you use that object to construct a profile sort of a way of breaking down the contents of an array or a string. Usually some sort of linear structure like an array or a string and then you're able to quickly compare that breakdown to how another objects looks. That was constructed from a string or an array.








## Summary
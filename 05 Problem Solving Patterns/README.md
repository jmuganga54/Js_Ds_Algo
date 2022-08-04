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

> This is useful and in algorithms and challenges when you have multiple pieces of data, multiple inputs which you need to compare them to see if they consists of similar values.
>
> If a values is contained inside of another value, anytime you're comparing piece of data to inputs or more than two and frequencies of certain things occur.

> Example
Write a function called `same`, which accepts two arrays. The function should return if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

```
//same([1,2,3],[4,1,9]) //true
//same([1,2,3],[1,9]) //false
//same([1,2,1],[4,4,1]) //false (must be same frequency)

//A NAIVE SOLUTION | TIME Complexity - N^2

function same(arr1,arr2){
    if(arr1.length != arr2.length){
        return false;
    }
    for(let i = 0;i<arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex == -1){
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}

//Expected output:
[ 9, 1, 4, 4 ]
[ 9, 4, 4 ]
[ 9, 4 ]
[ 4 ]
true

```

### REFACTORED
> Instead of looping over the first array then checking for each value in a subgroup over the second array, we can loop over each array one time individually which is what we going to do here.

`Remember` that two loops is vastly better than two nested loops.

```
```








## Summary
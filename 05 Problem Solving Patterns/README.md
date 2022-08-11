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


#### ANAGRAMS

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

```
validAnagram('','') //true
validAnagram('aaz','zza') //false
validAnagram('anagram','nagaram') //true
validAnagram('rat','car') //false
validAnagram('awesome','awesom')// false
validAnagram('qwerty','qeywrt')//true
validAnagram('texttwisttime','timetwisttext')//true


function validAnagram(first,second){

    //checking if the length match, if not return false
    if(first.length !== second.length){
        return false;
    }

    //frequency counter
    let lookup = {}

    //recording the frequency of each character in the first string
    for(let i=0;i<first.length; i++){
        let letter = first[i]
        //if letter exist, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    console.log(lookup)

    //Iterating the second string, compare each character with the first string
    for(let i = 0;i < second.length; i++){
        let letter = second[i];
        //can't find letter or letter is zero then it's not an anagram
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter] -= 1;
        }
    }
    return true;
}

console.log(validAnagram('anagram','nagaram'))


```
Any time you have multiple piece of data and you need to compare them, in particular if we need to see if they consist of the same individual piece whether it's anagrams or you're trying to see ifs one array is equal to another array squared each individual piece or if you need to tell if numbers consists of the same digits just in a different order.

### MULTIPLE POINTERS
Creating `pointers` or values that correspond to an index or position and move towards the beginning; end or middled based on a certain condition

> Very efficient for solving problems with minimal space complexity as well.

```
[-4,-3,-2,-1,0,1,2,5]
"alksjdalksjdlkasjdlks"

```

> AN EXAMPLE
Write a function called `sumZero` which accepts a `sorted`(lowest to highest) array of integers. The function should find the `first` pair where the sum is 0. Return an array that includes both values sum to zero or undefined if a pair does not exist.

```
sumZero([-3,-2,-1,0, 1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3])// undefined
```

#### NAIVE SOLUTION
This solution has a time complexity - O(N^2) and space complexity - O(1)
```
function sumZero(arr){
    for(let i=0; i<arr.length; i++){
        for(let j= i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i],arr[j]];
            }
        }
    }
}

console.log(sumZero(-4,-3,-2,-1,0,1,2,5))

//Expected output:[ -3, 3 ]

```

So this could benefit from a refactor using multiple pointer pattern. We would start a pointer ` at start [-4]` and start another pointer `at end[5]`, since the array is a sorted array, `at start is a smallest number` and `at end is a largest number`

We start by just seeing what the sum is, what they add to. Well `-4` and `5` it is going to give as a positive number which is `1` and that is too big, we're looking for 0. So we will move the pointer down `-4` and `2`.

#### REFACTOR
Time Complexity of this solution is O(N)

```
//REFACTOR
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;

    //avoiding cross over, number minus itself
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left], arr[right]]
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10])) 

//Expected output: [ -3, 3]
```

So the above solution uses two pointers in this case we are working from far left side and the far right side towards the middle.


#### countUniqueValues
> Challenge
Implement a function called `countUniqueValues`, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```
countUniqueValue([1,1,1,1,1,2])//2
countUniqueValue([1,2,3,4,4,4,7,7,12,12,13])//7
countUniqueValue([])//0
countUniqueValue([-2,-1,-1,0,1])//4
```

> Solution
```
//mySolution
// function countUniqueValue(array){
//     if(array.length === 0){
//         return 0
//     }
//     //assign pointer the start of an array
//     let left = 0
//     //assign pointer the end of an array
//     let right = 1
//     //iterating the index of start and end
//     //stop at the end
//     while(right <= array.length){
//         //Check if value in star is equal to value at end
//         if(array[left]=== array[right]){
//             //if true, increment end
//             right++;
//         }else{
//             //if false, increment star
//             left++
//             //assign it's value equal to value of end
//             array[left]= array[right]
//             //increment end
//             right++
            
//         }
        
//     }
 
//     return left++
    
// }


//REFACTOR
function countUniqueValue(arr){
    if(arr.length === 0){
        return 0
    }
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
}
    return i + 1;
}

console.log(countUniqueValue([1,1,2,3,3,4,5,6,6,7]))

//Expected output: 7

```



## Summary
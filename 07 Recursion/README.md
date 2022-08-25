## Topics
### Recursion
So this section is about a topic called recursion and I think often recursion comes to a lot of baggage. And I think that's because it's a little bit tricky to wrap your head around at first but then once it clicks, it's one of those things that once the piece fall into place, most people don't struggle as much to understand it and  become sort of second nature once you understand how it works.

`Recursion` it's a different way of thinking about writing solutions. We can write a solution to a problem non-recursive way which is called `Iterative`, but we can also use `recursion`.

## Keywords && Notes
### First Story, Once Upon a Time...

But the idea is basically taking one problem and doing it over and over on a smaller piece or on a changing piece until you hit some endpoint which we call the base case.

#### Objectives
* Define what recursion is and how it can be used
* Understand the two essential components of a recursion function
* Visualize the call stack to better debug and understand recursive functions
* Use helper method recursion and pure recursion to solve more difficult problems

`Remember` Recursion takes a little bit to click once you get it you get it. But if you struggle with it that's totally normal.

### What is recursion?

A `process` (a function in our case) that `calls itself`
```
no_odds([3142,5798,6550,5914]) // No Odds
no_odds([5798,6550,5914]) // No Odds
no_odds([6550,5914]) // No Odds
no_odds([5914])// No Odds
no_odds([])//No Odds

```
### Why do I need to know this?
`It's EVERYWHERE!` It's used all the time.

If you've been writing javascript you've probably been using recursive function without knowing it. The following things use recursion in Javascript and importance of it.
* JSON.parse/ JSON.stringify
* document.getElementById and DOM traversal algorithms
* Object traversal
* We will see it with more complex data structures.
* It's sometimes cleaner alternative to iteration

Now remember you don't have to do anything recursively but it's nice. Sometimes it's easier let's put it that way.It's cleaner and simpler to understand rather than doing it without recursion. 

### The Call Stack
`But first... let's talk about functions`

If a recursive function is calling itself over and over again what happens behind the scenes.

* In almost all program languages, there is a built in data structures that manages what happens when function are invoked.
* In Javascript it is called `Call Stack`

`Call Stack` So you can think of it as a stack of papers or something. It's actually a data structures called a `stack` that well learn about later.

* Any time a function invoked it is placed`(pushed)` on the top of the call stack.
* When Javascript sees the `return` keyword or when the function ends, the complier will remove(`pop`)

```
function takeShower(){
    return 'Showering'
}

function eatBreakFast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let items = ['Oatmeal','Eggs','Protein Shake']
    return items[Math.floor(Math.random()*items.length)]
}

function wakeUp(){
    takeShower()
    eatBreakFast()
    console.log('Ok ready to go to work!')
}

console.log(wakeUp())
```

The idea behind it is that as functions are invoked they're added to the top of the stack and then they popped off one at a time from the top as well.

### Why do I care?

* You're used to functions being pushed on the call stack and popped off when they are done.
* When we write recursive functions, we keep pushing new function onto the call stack!. In fact the same function over and over and it's waiting to be called.

### Our First Recursive Function
#### How recursive functions work

Invoke the `same` function with a different input until you reach your base case!

#### Base Case
The condition when the recursion ends

> This is the most important concept to understand

> Two selectional parts of a recursive function 
* Base case
* Different input

#### Our first recursive function 
```
function countDown(num){
    if(num <= 0){
        console.log('All done')
        return; //in order to stop it
    }

    console.log(num)
    num--
    countDown(num)
}

countDown(5)

//Expected output:
5
4
3
2
1
```

### Our second recursive function

```
function sumRange(num){
    if(num=== 1) return 1;
    return num + sumRange(num-1)
}
```

* Can you spot the base case?
> Base case almost always involves a conditional to check for something
 
* Do you notice the different input?
* What would happen if we didn't return?

> in this case whatever is returned from the base case matters it's added on to what the previous function call was waiting for.

### Factorial using Iterative Solution
```
function factorial(num){
    let total = 1;
    for(let i=num; i>0; i--){
        total *= i
    }
    return total;
}
 
console.log(factorial(3))

//Expected output: 6
```

### Factorial using Recursive Method
```
function factorial(num){
    if(num === 1){
        return 1;
    }
    return num * factorial(num-1)

}
factorial(5)
//Expected output: 120
```

### Where thing go wrong

This section will talk about some of the pitfalls the common problems that arise when you're writing recursive solutions.

* No base case
> You don't have a base case, or your base case is wrong.

* Forgetting to return or returning the wrong thing!
> So Importance of returning is that's what recursion is built on, the idea of this call stack where all these things are dependent on one another waiting they're kind of primed in a chain.

* Stack overflow
> Too many function trying to be called.
```
function factorial(num){
   if(num === 1) console.log(1);
   return num * factorial(num -1)

 

}
```

### Helper Method Recursion
> so far all the recursive functions we've written are single standalone function like factorial.It is recursive itself we call factorial from outside the function and factorial itself call factorial inside it's own code. That's been the case with all the functions we've written so far.

With helper method recursion it's a little bit different. The below code doesn't do anything, this is sort of just a pattern that I'm laying out but with helper method recursion we have two functions.

* The outer function `outer(input)`
* Inside we have recursive function `helper(helperInput)`,this function call itself

That's why is called a helper function or helper method recursion. We have our main outer function that we would call like a developer from outside `outer(input)` and pass something in and then inside the code of outer, there is another function defined and it is called and it call itself recursively.

So this is commonly done when we need to compile something like an array or a list of data. We're not simply tabulating or multiplying one value, over and over like we work with factorial or summing different something range.

> Another Example

```
function collectOddValues(array){
    let result = []
    function helper(helperInput){
        if(helperInput.length === 0){
            return;

        }
        if(helperInput[0]%2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(array)
    return result
}

collectOddValues([1,2,3,4,5,6,7,8,9])
console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

Expected output: [ 1, 3, 5, 7, 9 ]

```
### PURE RECURSION

> This section goes together with the previous section, we're going to solve the same problem in two different ways.

`Pure recursion` meaning the function itself is totally self-contained in it's recursive. We don't have some external data structure like we had in 'helper method recursion`. We're not doing a nested function helper method recursion.

Here is the code
```
function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0){
        return newArr
    }

    if(arr[0]%2 !== 0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));

    return newArr;
}
```

It is shorter but it's little harder to wrap your head around at first.

```
collectOddValue([1,2,3,4,5])
[1].concat(collectOddValue([2,3,4,5]))
    [].concat(collectOddValue([3,4,5]))
        [3].concat(collectOddValue([4,5]))
             [].concat(collectOddValue([5]))
                   [5].concat(collectOddValue([]))
                                []
Then the concat() function to build up the result based on the result value [1,3,5]
```

#### Pure Recursion Tips 
* For arrays, use methods like `slice`, `the spread operator` and `concat` that make copies of arrays so you do not mutate them.

* Remember that strings are immutable so you will need to use methods like `slice`, `substr` or `substring` to make copies of strings

* To make copies of object use `Object.assign` or the `spread operator`
## RESOURCE

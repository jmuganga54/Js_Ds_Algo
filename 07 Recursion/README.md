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
## RESOURCE

## Topic
### Algorithms and Problem Solving Patterns
This section deals with algorithms and problem solving patterns or strategies/game plans approaches.

Basically you're faced with a tough challenge some code a problem you have to solve and you don't know how to do it right of the bat. 

What are the steps you can take to make it solvable.

### OBJECTIVES
* Define what an algorithm is
* Device a plan to solve algorithms
* Compare and contrast problem solving pattern including frequency counters, two pointer problems divide and conquer.

## Keywords and notes

### WHAT IS AN ALGORITHM?

A `process` or `set of steps` to accomplish a certain task.

> So when we say algorithm I mean we could be talking about set of mathematical steps that we need to do to solve a problem.
>
> So that could be something simple like  calculate the first 100 prime numbers.

### Why do I need to know this?

Almost `everything` that you do in programming involves some kind of `algorithm!`

`It's the foundation for being a successful problem solver and developer`

### HOW DO YOU IMPROVE?
1. `Devise` a plan for solving problems
    > It is still technical but it's more about how do you approach the problem strategies for breaking it down.
2. `Master` common problem solving patterns.


### PROBLEM SOLVING 

> This is just laying down a set of steps that can help. But it's not going to solve the problem for you.

### PROBLEM SOLVING Strategies
* Understand the Problem
* Explore Concrete Examples
* Break It Down
* Solve / Simplify
* Look Back and Refactor


### UNDERSTAND THE PROBLEM
> The biggest challenges for new developers / new programmers has to do with solving problems. 
>
>So I think for most people it's easy enough to learn the syntax, it might take a little bit of time but it can be done.You can copy other people's code or remake an application following step by step instructions.
>
> But the hardest thing has to do with solving new problems and new challenges.And you do get better with time regardless of the technologies you use, the language that you're working in.
>
>It's really important to have a strong problem solving skill set and a lot of it will come naturally with time but it's worth being deliberate.It's worth having a game plan to follow step by step guide.
>
> It not going to solve your problem for you but it helps you sit and think about and break problems down.
>
> And it helps solution come about more naturally.

Note: many of these strategies are adapted from `George Polya`, whose book `How to Solve it` it is a great resource for anyone who wants to become a better problem solver.

Ask yourself these question, which will help `understand the problem`
1. Can I restate the problem in your own words?
> Don't just copy what the interviewer said but change it a bit in your own words to make sure that you actually understand what the question is.

2. What are the `inputs` that go into the problem?

3. What are the `outputs` that should come from the solution to the problem?
> What should the output look like.

4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? ( You may not be able to answer this question until you set about solving the problem.That's okay; it's still worth considering the question at this early stage.)
> Meaning do you have enough information to solve the problem, you have the inputs can you get the outputs that are expected. 

5. How should I label the important pieces of data that are a part of the problem?
> what are the terminologies you should use.

> Examples
#### Write a function which take two numbers and returns their sum.
1. Can I restate the problem in my own words?
> Implement addition

2. What are the inputs that go into the problem?
> 
* What are the inputs that go into the problem
* What type
* Do we only work with two inputs at all times( what happens if someone leaves off one input), 
* How large are these number going to be
* What if someone wants to add four or 10 numbers or our function will only going to work with two numbers
* What about string for large number?

3. What are the outputs that should come from the solution to the problem?
>
* int? float? string?
* Should it be an integer or  float (if you pass a float will you want a float, integer to integer)?
* Are you even allowed to pass in a float.?
* What about the string returning a string?


4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? ( You may not be able to answer this question until you set about solving the problem.That's okay; it's still worth considering the question at this early stage.)

> But if you think about it what happens if someone only passes one number and it's already discussed, we don't have enough information to do addition at that point, so do we add zero.Do we return undefined or null. 

5. How should I label the important pieces of data that are a part of the problem?
> So may be we name our function `add` and then we'll have `num1` and `num2` in the arguments, and then `sum` is our result that we `return`

### EXPLORE CONCRETE EXAMPLES

Coming up with examples can help you understand the problem better.

Examples also provide sanity( ability to think and behave) checks that you eventual solution works how it should

> So if you have those examples you can check your work but also you can learn more information by doing, these examples. 

And this applies on a larger scale things like `user stories` or unit tests on a smaller scale. `Unit tests` are used all the time to help lay out, how something should work for a smaller feature.

#### EXPLORE EXAMPLES
* Start with Simple Examples.
> Write down two or three simple examples with an input and then the output.

* Progress to More Complex Examples
> Simple examples the ones that should make you know the easiest `use cases` then progress to more complex examples.

* Explore Examples with Empty Inputs
> Then what about `edge cases`, explore examples with empty inputs that will often give you some insight into how the problem should work especially in an interview.

* Explore Examples with Invalid inputs.
> So this is more useful in the real world. What happens if a user enters something that is invalid. We have to think about this all the time.

> Let Explore this with a concrete problem.

#### Write a function which takes in a string and returns count of each character in the string.

1. Start with simple Examples
```
charCount("aaa") //{a:4}
charCount("hello") //{h:1, e:1, l:2, o:1}
```

2. Progress to More Complex Examples

What if the input is "my phone number is 182763"?
> What do we expect to return, do we count spaces, what about $,_,numbers

What if the input is "Hello hi"
> Do we ignore casing, should we count H:1 and h:1
> This are more complex inputs

3. Explore Examples with Empty Inputs

What if someone pass nothing to the function?
> charCount()
OR an empty string, should we return an `empty object {}`, `null`, `undefined` or `an error`
> charCount("")

4. Explore Examples with Invalid Inputs

So what if somebody passes in something that isn't a string, a number, an object or they pass in null

There's all sorts of these edge cases.

### BREAK IT DOWN
It means take the actual steps of the problem and write them down.

Doesn't have to be full pseudo code, it doesn't have to be a valid syntax.Just little comments as a guide for steps needed to be taken.

Explicitly write out the steps you need to take.
> It doesn't' have to be a ton of detail, it doesn't have to be a line by line, just the basic components of the solution.

This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details(e.g language syntax) as well.

> Example
#### Write a function which takes in a string and returns counts of each character in the string.

```
//Explore Concrete Examples
charCount("aaa")
/*
{
    a:4
}
*/

charCount("hello")
/*
{
    h:1,
    e:1,
    l:2,
    o:1
}
*/

charCount("Your PIN number is 1234!")
/*
{
    1:1,
    2:1,
    3:1,
    4:1,
    b:1,
    3:1,
    i:2,
    m:1,
    n:2,
    9:1,
    p:1,
    r:2,
    s:1,
    u:2,
    y:1

}
*/
//skeleton of the function
function charCount(str){
    //do something
    //return an object with keys that are lowercase alphanumeric characters in the string; values should 

}

function charCount(str){
    //make object to return at end
    //loop over string, for each character ..
        //if the char is a number/letter AND is a  key in object, add one to count
        //if the char is a number/letter AND not in object, add it to object and set value to 1
        //if character is something else (space, period, etc) don't do anything
    //return object at end
  
}
```

### SOLVE /SIMPLIFY

> Break down your approach, your solution into a couple of steps that you can follow. It doesn't have to be in details but it does help if you can come up with pretty thorough steps. And then if all of that went well and you feel good about it you can just save and you write your code right away.
>
> Even if you do solve it there's still a step after this but sometimes you're not ready to solve the entire problem at this point.You might feel good about 80% but then there's this one thing you're not sure how to do or there's two things that are really challenging.

#### SOLVE THE PROBLEM if you can't ... SOLVE A SIMPLER PROBLEM!
> What it really mean is trying to ignore the part that is giving you a really hard time in order to focus on everything else.

It's pretty common that in simplifying a problem you'll gain insight into the actual solution into the harder part of the problem and something will click into place.

> So I really recommend that if you do get stuck on something but you know where to start or you know a place to start. You should just go for it,once you've done the first three steps, you understood the problem, you've done concrete examples and you've broken it down into steps.

#### SIMPLIFY
* Find the core difficulty in what you're trying to do
* Temporarily ignore that difficulty
* Write a simplified solution
* The incorporate that difficulty back in.

> Example
#### Write a function which takes in a string and returns counts of each character in the string.

```
//Explore Concrete Examples
charCount("aaaa")
/*
{
    a:4
}
*/

charCount("hello")
/*
{
    h:1,
    e:1,
    l:2,
    o:1
}
*/

charCount("Your PIN number is 1234!")
/*
{
    1:1,
    2:1,
    3:1,
    4:1,
    b:1,
    3:1,
    i:2,
    m:1,
    n:2,
    9:1,
    p:1,
    r:2,
    s:1,
    u:2,
    y:1

}
*/
//skeleton of the function
function charCount(str){
    //do something
    //return an object with keys that are lowercase alphanumeric characters in the string; values should 

}

function charCount(str){ 
    //make object to return at end
    let result = {};
    //loop over string, for each character ...
    for(let i=0; i< str.length; i++){
        let char = str[i].toLowerCase();
         //if the char is a number/letter AND is a  key in object, add one to count
        if(result[char] > 0){
            result[char]++

        }else{
            //if the char is a number/letter AND not in object, add it to object and set value to 1
            result[char] = 1
        }

    }
       
        //if the char is a number/letter AND not in object, add it to object and set value to 1
        //if character is something else (space, period, etc) don't do anything
    //return object at end
    return result;
  
}


console.log(charCount('Hi there!'))

//Expected output:
{ h: 2, i: 1, ' ': 1, t: 1, e: 2, r: 1, '!': 1 }

```

### LOOK BACK & REFACTOR

> It's really important to try and improve your code. And it's a missed opportunity if you don't take the time to look at your code, look back and reflect on it. 
>
> Look at individual components line by line talk about the part you don't like or what don't like about how the code itself looks, how it reads, how easy it's to understand.
>
> Most people care about is efficiency when they're looking at code.But there's often a balance that needs to be struck between those two pillars of efficiency and legibility

#### REFACTORING QUESTIONS
* Can you check the result?
* Can you derive the result differently?
> So this is referring to the fact that there is rarely one solution and only one solution to a problem
* Can you understand it at a glance?
> So how intuitive is your solution does that make sense when you look at it on paper or a whiteboard.
* Can you use the result or method for some other problem?
* Can you improve the performance of your solution?
> Mainly time complexity and space complexity.
* Can you think of other ways to refactor?
* How have other people solved this problem?

`Remember`: Just write first thing that comes to mind the simplest most basic syntax and then come back and clean it up.

```

// function charCount(str){
//     let obj = {};
//     for(let i=0; i<str.length; i++){
//         let char = str[i].toLowerCase();
//         if(/[a-z0-9]/.test(char)){
//             if(obj[char] > 0){
//                 obj[char]++;
//             }else{
//                 obj[char] = 1;
//             }

//         }
//     }
//     return obj
// }

// function charCount(str){
//     let obj = {};
//     for(let char of str){
//         char = char.toLowerCase();
//         if(/[a-z0-9]/.test(char)){
//             // obj[char] > 0 ?  obj[char]++ :  obj[char] = 1;
//             obj[char] = ++obj[char] || 1
//         }
//     }
//     return obj
// }

function charCount(str){
    let obj = {};
    for(let char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}

function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && // numeric (0-9)
       !(code > 64 && code < 91) && // upper alpha (A-Z)
       !(code > 64 && code < 91)){// lower alpha (a-z)
        return false;
       }
       return true;
}

console.log(charCount('Hello WORLD hi!!!'))


```
>Read More

[Slides Problem Solving Approach](https://cs.slides.com/colt_steele/problem-solving-patterns)

## Summary
Things you have to do when solving problems
* Understand the Problem

* Explore Concrete Examples

* Break It Down

> So make sure you know where you're going before you just start typing code.
*  Solve / Simply
> If you can't solve the problem right away solve a problem that you can. Even if it's simpler if you simplify you remove some core difficulty, core challenge try and solve something where you can then reincorporate that core difficulty back in.
>
> So if you're not sure how to test for something being alphanumeric ignore that part and just write the problem, write the solution ignoring the alphanumeric part so that you could then plug it in later.

* Look Back and Refactor
> Come back and clean it up.


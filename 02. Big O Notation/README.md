## Topics
> In this section we will learn about Big O Notation
* Time Complexity and Space complexity
* Evaluate the time complexity and space complexity of different algorithms using Big O Notation
* Describe what algorithm is 

## Notes

### Big O Notation
It's a system, it's a way of generalizing code and talking about it and comparing code and it's performance to other piece of code.

#### Timing Our code
> Suppose we want to write a function that calculate the sum of all number from 1 up to (and including) some number n.

```
//first solution

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(100))

//Expected output: 5050

```

```
//second solution

function addUpTo(n) {
  return n * (n + 1) / 2;
}

console.log(addUpTo(6))
```

> What does better mean
* Faster?
* Less memory-intensive?
* More readable?

> Faster?
```
//Faster algorithms
function addUpTo(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();

console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

//Expected output: Time Elapsed: 0 seconds.
```

```
// Slower algorithm
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}


var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//Expected output: Time Elapsed: 1.1001999999880792 seconds.

```

#### The Problem with time
* Different machine will record different times
* The same machine will record different times
* For fast algorithms, speed measurement may not be precise enough?

### if not time, then what?
* Rather than counting seconds, which so variable
* Let's count the number of simple operations the computer has to perform

#### Counting Operations

```
function addupTo(n){
    return n * (n+ 1)/ 2;
}
```
> On the above code, there number of operation (1 multiplication), (1 addition) and (1 division)

```
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

> On the above code, there n operation which are done on different operation

#### Counting is hard
Depending on what we count, the number of operation can be as low as 2n or as high as 5n + 2

But regardless of the exact number, the number of operations grows roughly proportionally with n.

> So in this case as  `n` grows the number of operations grow roughly in proportion with `n`











## Summary
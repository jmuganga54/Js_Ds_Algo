## Topics
### Searching Algorithms
In this section we're talking about search and searching algorithms.

For now were focussing simpler searching algorithms that are really commonly used. For example let say we have a string and we're checking to see if there's another string contained in that string.

Or let's say that I have a Web site and I want people to sign up and they add their username and they sign up the username and password. We need to tell them if their username is taken.

```
let usernames = ['tommy', 'monkeygurl', 'dinesh123', 'patrick33','cats4lyfe','timothy','tom','tommy1',tomm_y',i_hate_cats','pickle_luvr','pickle_hater','dog_guy','q','juan987']

#### Objectives
* Describe what a searching algorithm is
* Implement linear search on arrays
* Implement binary search on sorted arrays
* Implement a naive string searching algorithm
* Implement the KMP string searching algorithm


```
## Keywords && Notes
> Intro to Linear Search
### How do we search?
So for now we will focus on searching in an array

So Image that a user typed something in and they're trying to create and address then they need to enter a state or territory and for our application we want to make sure it's in this array. What is hte best way to do that.
```
let states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
```

> Given an array, the simplest way to search for a values is to look at every element in the array and check if it's the value we want.

Right so if the user enters let's say `Indiana` we would just start at the beginning and check. And we keep going until we get to Indiana, and in that case we return something such as true, or we say the index that we found.

Now that approach is actually not a bad approach.Now in this situation where we have sorted data alphabetically sorted there are better ways.

For let go back to the list which was unsorted.
```
let usernames = ['tommy', 'monkeygurl', 'dinesh123', 'patrick33','cats4lyfe','timothy','tom','tommy1',tomm_y',i_hate_cats','pickle_luvr','pickle_hater','dog_guy','q','juan987'] 
```

> So if someone enters 'i_hate_cats', it's username. How do we check if its taken or not

In that case the best way of doing it is to check every single element one at a time. Are you 'i_hate_cates', no, then next, continue, keep going until we find it or we get to the end. That is called `Linear Search`.

### Javascript has search
There are many different search method on array in Javascript
* indexOf
* includes
* find
* findIndex

> But how do these functions work?

```
let usernames = ['tommy', 'monkeygurl', 'dinesh123', 'patrick33','cats4lyfe','timothy','tom','tommy1','tomm_y','i_hate_cats','pickle_luvr','pickle_hater','dog_guy','q','juan987']

console.log(usernames.indexOf('tomm_y'))
//searching for something that doesn't exist
console.log(usernames.indexOf('asd'))
usernames.includes('tom')
//checking if includes
console.log(usernames.includes('tom'))
console.log(usernames.includes('toms'))

//Expected output:
8
-1
true
true
false

```

So what's happening on the above methods, it is going through and checking each item to see if match or not, until the end.

### Linear Search 
We visit one item at at time starting at the beginning moving forward. Or we could start at the end and move backward but it doesn't matter. All that matters is that we're moving at a set interval one item at a time checking every single thing.

> For example
Let's search for 12:

```
function linearSearch (arr,num){
    //check is it is an array
    if(arr.length === 0){
        return;
    }
    //Loop through all the the item 
    for(let index in arr){
        //compare if it is 12
        if(arr[index] === num){
           //if true, return index of num
            return index;
        }

    }
    //if false, return -1
    return -1
}

console.log(linearSearch(numbers,12))

```

### Linear Search BIG O

The very best case is that we find the thing we're looking for right away `O(1)`. So that's the best possible scenario, that is pretty rare, depending on the size of your data the worse case is `O(N)`.

So if we have a million integers in an array and we're searching for the last one or we're searching for something that's not in there we're going to have to look a million times. If we have 50 things in there and it's the very last element that we're looking for, we're going to have to look 50 times 

Average is also `O(n)`, we care bout just the general trend. So as N grows the length of the array grows or the length of string or whatever we're working with, so does the average amount of time it takes.

> So this is Linear search, it's the best we can do with an unsorted piece of data.

### Binary Search 

Second Searching Algorithm and this one can be a significant improvement on `Linear Search`, which is called `Binary Search`

* Binary Search is a much faster form of search.
* Rather than eliminating one element at a time, you can `eliminate half` of the remaining elements at a time
* Binary search only works on sorted arrays!

#### Divide and Conquer

So the idea is `dividing and conquering`, so we split up the array into two pieces. We pick a pivot in the middle usually and we check the left side and the right side and see where, based of what we're looking for where it will be in which half.

> So if we have a sorted array of numbers or string or whatever it is as long as we can compare easily to check if something is greater than or less than in some respect if we can do that then we can implement `binary Search which is much better`.

## Resouce
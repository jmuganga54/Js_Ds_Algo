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

### Binary Search Pseudocode
* Write a function accepts a sorted array and value
* Create a left pointer at the start of the array, and a right pointer at the end of the array.
* While the left pointer comes before the right pointer:
    * Create pointer in the middle
    * If you find the value you want, return the index
    * If the value is too small, move the left pointer up
    * If the value is too large, move the right pointer down
* if you never find the value, return -1

> You're going to loop over and over and there's two thing that you're checking for. One is have you found the element. 
>
> So while you haven't found the element keep looping But along with that there's a second condition which is you want to make sure that you're only looping while the left comes before the right pointer and then you're also going to pick the middle and you can just take an average of the left and right, not the values you should remember but the position.
>
> So if the left start at 0 and right start at 10 then you could take the middle to be five and then you're basically going to loop and you're going to check first of all is the element equal to the middle, is the middle, what we're looking for if it is then just return we're done.
>
> So if you find that value return the index if the value is too small then you're going to move the left pointer up and if the values is too large you move the right pointer down.
>
> And then finally at the end if you never find the value just return negative 1.

### Binary Search Solution
> Longer Version
```
function binarySearch(arr,elem){
    //setting the start pointer
    let start = 0;
    //setting the end pointer
    let end = arr.length -1
    //setting the middle pointer
    let middle =Math.floor((start + end)/2);
    

    //[2,5,6,9,13,15,28,30], start:2, middle:9 end:30
    //continue to loop and repeat the above process
    while(arr[middle] !== elem && start <= end){
 
    /**
     * While the middle is wrong, example 9 but we are 
     * we are looking for 15
     * So we're going to repeat the above code.
     * 
     * Now the code that we're going to do first 
     * we're going to check, the middle value
     * 
     * The middle is either greater than or less than 
     * if the number we're looking for is less than 
     * the middle, so if our middle is
     * is 9 [2,5,6,[9],13,15,28,30], let say we're 
     * looking for six, six is less than 9, so we're going to move our window all the way down to [2,5,6]
     * 
     * So what we are supposed to do is to shift our end
     * down to 6, start 2, and middle 5
     * 
     * Now you might think we could shift the end to 
     * 9 and that would work but it's redundant because
     * we know that 9 is not the answer already, we checked
     * it
     * 
     * So we are going to set the end to be (middle - 1),
     * which will point to 6
     * 
     * Likewise the other direction like in this case with
     * 15 we checked 9 that's too small, so we're going
     * to move our window all the way up to [13,15,28,30],
     * so our start will be 13, middle 15 and end 30.
     * 
     * 
     * 
     */

    if(elem < arr[middle]){
        //end pointer to be (middle - 1),point to 6, [2,5,6,[9],13,15,28,30]
        //the start pointer is still pointing at 2
        end = middle - 1

    }else{
        //incase elem is greater than middle value
        //start to be (middle + 1),point to 13, [2,5,6,[9],13,15,28,30]
        //the end pointer is still pointing at 30
        start = middle + 1
    }
    //middle pointer,(4+7)/2 = Math.floor(5.5), 5, which will point at 15
    // then test it again
    middle =Math.floor((start + end)/2);

    }

    //After looping all the element necessary
    if(arr[middle] === elem){
        return middle
    }
    return -1

}

console.log(binarySearch([2,5,6,9,13,15,28,30],5))

//Expected output:
0 3 7
1
```

> Shorter version
```
function binarySearch(arr,elem){
    let start = 0;
    let end = arr.length -1
    let middle =Math.floor((start + end)/2);
    
    while(arr[middle] !== elem && start <= end){
    if(elem < arr[middle]) end = middle - 1
       else  start = middle + 1
    middle =Math.floor((start + end)/2);

    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2,5,6,9,13,15,28,30],30))

//Expected outcome:
7
```

So Keep in mind `Binary Search` works great on a sorted array otherwise it is useless.

So `Linear Search` is the best that we can do.Is the best we can do on an unsorted array, `Binary Search` works better if our data is sorted

## Resource
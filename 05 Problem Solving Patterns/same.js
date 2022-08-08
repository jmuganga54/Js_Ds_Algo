//same([1,2,3],[4,1,9]) //true
//same([1,2,3],[1,9]) //false
//same([1,2,1],[4,4,1]) //false (must be same frequency)

// function same(arr1,arr2){
//     //if the two array have different length
//     if(arr1.length != arr2.length){
//         return false;
//     }
//     for(let i = 0;i<arr1.length; i++){
//         //find the index of a number after exponent of 2
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1){
//             return false;
//         }
//         console.log(arr2)
//         //delete the number
//         arr2.splice(correctIndex,1)
//     }
//     return true
// }

// console.log(same([1,2,3,2],[9,1,4,4]))

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
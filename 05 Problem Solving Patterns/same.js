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
    if(arr1.length !== arr2.length){
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let va1 of arr1){
        frequencyCounter1[va1] = (frequencyCounter1[va1] || 0) + 1
    }
    for(let va1 of arr2){
        frequencyCounter2[va1] = (frequencyCounter2[va1] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
            return false
        }
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    return true
}

console.log(same([1,2,3,2],[9,1,4,4]))
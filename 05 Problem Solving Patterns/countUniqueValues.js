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
//     //avoid cross over
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
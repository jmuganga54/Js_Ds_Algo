// function maxSubarraySum(arr,num){
//     //check if num is greater than array length ([],4) : null
//     //if yes, return null
//     if(num > arr.length){
//         return null
//     }
//     //make a variable to store the max
//     let max = -Infinity;

//     //Iterate the array based on num :[1,2,3,4,] Iterate at 1,2,3 only
//     for(let i=0; i<arr.length - num + 1; i++){
//         //make a variable to store the temp
//         let temp = 0;
       
//         //Iterate the array to sum based on num
//         for(let j=0; j<num; j++){
//             //cal the sum of numbers which are consecutive based on num
//             //Assign it to temp
//             temp += arr[i+j]
//         }
//          //Compare if temp is greater than max
//         //If no, do nothing
//         //If yes, assign max with temp
//         if(temp> max){
//             max = temp;
//         }
//     }
//     //return max
//     return max
// }



function maxSubarraySum(arr,num){
    let maxSum = 0;
    let tempSum = 0;
    //checking for the edge case empty array, ([],4) return null
    if(arr.length < num) return null;
    
    //find the sum of the first numbers based of num=2 [1,2,3,4], sum [1,2]
    //assign it to maxSumb
    for(let i = 0; i<num; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;
    console.log([tempSum,maxSum]) //[3,3]

    //find the next sum after the first sum(3): [1,2,3,4] : tempSum(3) - 1 + 3 =5
    //Previous sub sum -  Previous sub first + Current sub end
    for(let i =num; i<arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        console.log(`tempSum ${tempSum}`)
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
        

}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))
// console.log(maxSubarraySum([1,2,3,4],2))



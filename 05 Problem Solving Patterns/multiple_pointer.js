// function sumZero(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j= i+1; j<arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i],arr[j]];
//             }
//         }
//     }
// }

//REFACTOR
function sumZero(arr){
    //assign the start of the array
    let left = 0;
    //assign the end of the array
    let right = arr.length - 1;
    //avoiding cross over, number minus itself
    while(left < right){
        //calculate sum start and end values of an array
        let sum = arr[left] + arr[right]
        //check if sum is equal to 0
        if(sum === 0){
            //return an array, which contain values, when summed is equal to 0
            return [arr[left], arr[right]]
        }else if(sum > 0){
             //if sum greater than 0,step down from the right 
            right--;
        }else{
            //if sum less than 0, step down from the left
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10])) 

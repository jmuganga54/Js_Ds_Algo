// let usernames = ['tommy', 'monkeygurl', 'dinesh123','dinesh1234', 'patrick33','cats4lyfe','timothy','tom','tommy1','tomm_y','i_hate_cats','pickle_luvr','pickle_hater','dog_guy','q','juan987']

// console.log(usernames.indexOf('tomm_y'))


//searching for something that doesn't exist
// console.log(usernames.indexOf('asd'))

// console.log(usernames.includes('tom'))

let numbers = [5,8,1,100,12,3,12]



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
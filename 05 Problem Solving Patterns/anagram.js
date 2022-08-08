/**
 * Two string, checking if first string is an anagram of second string.
 * 
 */

// function validAnagram(str1,str2){

//     //checking the length of str1,str2, if not same return false
//     if(str1.length !== str2.length){
//         return false;
//     }
//     //create an objects which will store the frequencies of each character
//     let frequencyCharStr1 = {}
//     let frequencyCharStr2 = {}

//     //Check the frequency  | Iterate each character of string and record it's frequency
//     for(let char1 of str1){
//         frequencyCharStr1[char1] = ( frequencyCharStr1[char1] || 0) + 1
//     }
//     for(let char2 of str2){
//         frequencyCharStr2[char2] = ( frequencyCharStr2[char2] || 0) + 1
//     }

//     console.log(frequencyCharStr1)
//     console.log(frequencyCharStr2)

//     //iterate the key of the frequencyCharStr1
//     for(let key in frequencyCharStr1){

//         // checking if the key of first string, is in the second string, if not return false
//         if(!(key in frequencyCharStr2)){
//             return false;
//         }
//         //Checking the frequency of each character if are the same, str1 and str2
//         if(!(frequencyCharStr1[key] === frequencyCharStr2[key])){
//             return false;
//         }
       
//     }

//     return true;


// }


// console.log(validAnagram('texttwisttime','timetwisttext'))

function validAnagram(first,second){

    //checking if the length match, if not return false
    if(first.length !== second.length){
        return false;
    }

    //frequency counter
    let lookup = {}

    //recording the frequency of each character in the first string
    for(let i=0;i<first.length; i++){
        let letter = first[i]
        //if letter exist, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    console.log(lookup)

    //Iterating the second string, compare each character with the first string
    for(let i = 0;i < second.length; i++){
        let letter = second[i];
        //can't find letter or letter is zero then it's not an anagram
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter] -= 1;
        }
    }
    return true;
}

console.log(validAnagram('anagram','nagaram'))
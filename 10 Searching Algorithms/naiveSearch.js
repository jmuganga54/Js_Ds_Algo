function naiveSearch(largerString, shorterString){
    let counter =0

    //And then you loop over each character in the longer string
    for(let i=0;i<largerString.length; i++){
       for(let j=0;j<shorterString.length; j++){
            //If the characters don't match, break out of the inner loop
            if(largerString[i]!==shorterString[j]){
                break;
            }else{
                s=1
                while(s<3){
                    if(largerString[i+s]!==shorterString[j+s]){
                        break

                    }
                    s++
                }
                if(s===3 ){
                    counter++;
                }
               
            }
       
       }
    }

    return counter;

}

console.log(naiveSearch('pomgpwjskomgkskskdksomg','wsk'))
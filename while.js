console.log('Here is : While');

// 1-
function subtract(n){
    let index = n;
    let sub = 0;
    while(index >= 0){
        if(index != n){
        sub+=index;
        }
        index--;
    }
    let result = n - sub;
    return result;
}



// 2-
function factorial(n){
    let index = n;
    let result = n;
    while(index > 0){
        if(index != n){result *= index;}
        index--;
    }
    return result;
}


// 3-
function repeatStr(text , number ){
    let arr = [];
    let index = 0;
    while(index < number){
        arr[index] = text;  
        index++;
    }
    if(number !== 0 ){
    return `"${arr.join(" ")}"`;
    }
    else{ 
    return ``;
    }  
}

/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/


// 4-
function sum2(firstN , secondN){
    let sum = 0;
    let index = firstN;
    while(index <= secondN){
        if(firstN != secondN){
            sum += index;
        }else{
            sum = index*2;
        }        
        index++;
    }   
    return sum;
}


// 5-
function repeatStr2(strOne, strTwo){
    let index = 0;
    let arr = [];
    while(index < strTwo.length){
    arr[index] = strOne;
    index++;
    }
    if(index !==0 ){
        return `"${arr.join(" ")}"`;
    }else{
        return ``;
    }

}


// 6-
function multiOf(fNumber,sNumber,thNumber){
 let result = fNumber * (Math.pow(sNumber,thNumber));
 return result;
}








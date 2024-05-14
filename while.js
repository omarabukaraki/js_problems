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


// 7-
function muti2(nOne,nTwo){
    let multi = 1;
    let index = nOne;
    while(index <= nTwo){
        if(nOne != nTwo){
            multi *= index;
        }else{
            multi = Math.pow(index,2);
        }        
        index++;
    }   
    return multi;
}


// 8-
function numberBetweenUs(num1 , num2){
    let index = num1;
    let numbers = "";  
    while (index < num2){
        if(index === num2-1){
            numbers =  numbers.concat(`${index}`) ;
        }
        else if(index !== num1){
            numbers =  numbers.concat(`${index}, `) ;
        }
        index++;
    }
    return `"${numbers}"`;
}


// 9-
function countDown(num1){
    if(num1 === 0) return "done";
    return `${num1}, ${countDown(num1 - 1)}`;
}


// 10-
function multiplication2(num1 , num2){
    if(num2 === 1) return num1;
    return num1+ multiplication2(num1 , num2 - 1)
}

// 11-
function mod2(num1 , num2){
    if(num1 < num2 ) return num1;
    return mod2(num1-num2,num2);
}


// 12-
function repeatChar(str,char){
    let string =str.toLowerCase();
    let char1 =char.toLowerCase();
    let index = 0;
    let counter = 0;
    while(index < str.length){
        if(string[index] === char1){
            counter++;
        }
        index++;
    }
    return counter;
}



/**********{Advanced Part}**********/

// 1-
function fibon(number){
    if(number === 0) return 1 ;
    if(number === 1) return 1 ;
    return fibon(number -1) + fibon(number -2);
}


// 2-
function mirror(str){
    let arr = [];
    let i = 0;
    while(i < str.length){
        arr.unshift(str[i]);
        i++;
    }
    return `"${arr.join("")}"`;
}


// 3-
function mirrorCaseAlso(str){
    let arr = [];
    let i = 0;
    while(i < str.length){
        if(str[i] !== str[i].toLowerCase()){
            arr.unshift(str[i].toLowerCase());
        }else{
            arr.unshift(str[i].toUpperCase());
        }
        i++;
    }
    return `"${arr.join("")}"`;
}


// 4-
function repeatChar2(str,char){
    let index = 0;
    let counter = 0;
    while(index < str.length){
        if(str[index] === char){
            counter++;
        }
        index++;
    }
    return counter;
}



// 1-
function tellFortune(Jt,gLo,pName,nCh){
    let result = `You will be a ${Jt} in ${gLo}, and married to ${pName} with ${nCh} kids.`
    return result;
}



// 2-
function calculateDogAge(pAge){
    let result = `Your doggie is ${pAge*7} years old in dog years!`;
    return result;
}


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

// 3-



// 4- 
function greet(name){
    return `Hello ${name}`
}



// what is the error:
// 5-
// function double(cat) {
//   return 2 * x;
// } 
// sol : x is not defined 

// function double(7) {
//   return 2 * 7;
// }
// sol : syntax error becuse the parameter is constant not variable 

// function double('7') {
//   return 2 * 'x';
// }
// sol : syntax error becuse the parameter is constant not variable 




/*
6
fix these functions:
function double1(x){
  return 2 * x ;
}

function double2(x){
return 2 * x;
}

function double3(x){
  return 2 * x;

*/


// 7-
function cube(number){
    let reuslt = Math.pow(number,3);
    return reuslt;
}



// 8-
function multiply(num1,num2){
    if(typeof num1 && typeof num2 === "number"){
        return num1 * num2;
    }
    else{
        return `Please enter number`;
    }
}



// 9-
function canIGetADrivingLicense(age){
    let acceptAge = 20;
    if(age >= acceptAge){
        return `"yes you can"`;
    }else{
        return `"please come back after ${acceptAge - age} years to get one"`
    }
}



// 10-
function sameLength(str1 , str2){
    if(str1.length === str2.length){
        return true;
    }else{
        return false;
    }
}


// 11-
function largerNubmer(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}



// 12-
function smallerNubmer(num1,num2,num3){
    if(num1 < num2 && num1 < num3){
        return num1;
    }else if(num2 < num1 && num2 < num3){
        return num2
    }else return num3;
}



// 13-
function shorterString(str1,str2,str3,str4,str5){
    let strings = [str1,str2,str3,str4,str5];
    let shortStr =str1;
    for (let index = 0; index < strings.length; index++) {
        if(strings[index].length < shortStr.length){
            shortStr = strings[index];
        }
    }
    return shortStr;
}



// 14-
function longerString(str1,str2,str3,str4){
    let strings = [str1,str2,str3,str4];
    let longStr = str1;
    for (let index = 0; index < strings.length; index++) {
        if(strings[index].length > longStr.length){
            longStr = strings[index];
        }
    }
    return longStr;
}


// 15-
function isEven(number){
    let bool;
    number % 2 === 0 ? bool = true : bool = false;
    return bool;
}


// 16-
function isOdd(number){
    let bool;
    number % 2 === 1 ? bool = true : bool = false;
    return bool;
}


// 17-
function positive(number){
    let result;
    number < 0  ? result = number * (-1) : result = number;
    return result;
}



// 18-
function fullName(fName,lName){
    return `"${fName} ${lName}"`
}



// 19-
function average(n1,n2,n3,n4,n5){
    return ((n1+n2+n3+n4+n5) / 5);
}



// 20-
function randomNumber(){
    return Math.random();
}


// 21-
function randomBetweenNumbers(num1,num2){
    let r =Math.random() * num2;
    if(r> num1 && r<num2){
        return r;
    }else{
        return (num2-num1)+Math.random() ;
    }
    
}


// 22-
function scoreInUniversty(score){
    if(95<=score && score<=100)return `"A"`;
    else if(85<=score && score<=94) return `"B"`;
    else if(70<=score && score<=84) return `"C"`;
    else if(50<=score  && score<=69) return `"D"`;
    else return `"F"`;
}

// 23-
let count = 0;
function counter(){
    return ++count;
}

// 24-
function resetCounter(){
    let counter = count;
    count=0;
    return `${counter} and the counter reset now`;
}



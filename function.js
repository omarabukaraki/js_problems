

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


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
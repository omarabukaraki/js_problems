
console.log('Here is : ', 'array');

/*1
Correct the syntax error
[ 1,7  9  45, ]

["Str" "alex","moh"
'the','fox' 'over' lazy, 'dog',  ]

The sol:
[ 1,7 , 9 , 45 ]
["Str", "alex","moh" ,'the','fox', 'over' ,"lazy", 'dog', ]
 */


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

The sol:
"Banana" => 1
"Tomato" => 0
*/


// 3-
let favFood = ["Pizza","Shawarma","Watermelon","Mansaf","Bulgur"];
let favSport = ["Football","Baseball","Softball"];
let favMovie = ["Fare","Lord of Rings","Hacksaw Ridge","Burning Bright"];


// 4-
function firstOfArray(arr){
  return arr[0];
}


// 5-
function lastOfArray(arr){
    return arr[arr.length -1];
}


// 6-
var array = [0,5,7,9];
array.push(10);
array.shift();
array.shift();
array.shift();
array.unshift(1,3,4,6,8);
// console.log(array);

// 7-
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/


// 8-
function middleOfArray(arr){
    if(arr.length % 2 === 1){
     return arr[(arr.length /2)-0.5];
    }else{
        return `"${arr[(arr.length / 2 )-1]} and ${arr[arr.length / 2]}"`;
    }

}


// 9-
var animals = ['cat', 'ele', 'bird'];
animals[3]= 'zebra';
animals[4]='elephant';


// 10-
function indexOfArray(arr,index){
    if(index >= arr.length ){
        return "Out of index";
    }  else{
        return arr[index];
    }
}


// 11-
function arrayExceptLast(arr){
    return arr.slice(-arr.length,-1); 
}


// 12-
function addToEnd(arr,value){
    let array = arr;
    array.pop();
    array.push(value);
    return array; 
}


// 13-
//using for loop: 
function sumArray(arr){
    let sumElement = 0;
    for (let index = 0; index < arr.length; index++) {
        sumElement +=arr[index]; 
    }
    return sumElement;
}

//using while loop:
function sumArrayWhile(arr){
    let index = 0;
    let sumElement = 0;
    
    while(index < arr.length){
        sumElement += arr[index];
        index++;
    }
    return sumElement;
}


// 14-
//using for loop:
function minInArray(arr){
    let minValue=arr[0];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]<=arr[index+1]){
            if(arr[index]<=minValue){
            minValue = arr[index];
            }
        }else if(arr[index]>= arr[index+1]){
            if(arr[index+1]<= minValue){
            minValue = arr[index+1];
            }
            }
    }
    return minValue;
}

//using while loop:
function minInArrayWhile(arr){
    let minValue = arr[0];
    let index = 0;
    while(index < arr.length){
        if(arr[index]<=arr[index+1]){
            if(arr[index]<=minValue){
            minValue = arr[index];
            }
        }else if(arr[index]>= arr[index+1]){
            if(arr[index+1]<= minValue){
            minValue = arr[index+1];
            }
            }
            index++;
    }
    return minValue;
}


// 15-
//using for loop:
function removeFromArray(arr,element){
    let array = arr;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]=== element){
            array.splice(index,1);
        }        
    }
    return array;
}

//using while loop:
function removeFromArrayWhile(arr,element){
    let array = arr;
    let index = 0;
    while(index < arr.length){
        if(arr[index]=== element){
            array.splice(index,1);
        }    
        index++;
    }
    return array;
}


// 16-
// using for loop:
function oddArray(arr){
let i = 0;
let newArr = [];
for (let index = 0; index < arr.length; index++) {
    if(arr[index]%2 === 1){
        newArr[i] = arr[index];
        i++;
    }    
}
return newArr;
}

//using while loop:
function oddArrayWhile(arr){
    let i = 0;
    let newArr = [];
    let index = 0;

    while(index < arr.length){
        if(arr[index]%2 === 1){
            newArr[i]= arr[index];
            i++;
        }
        index++;
    }
    return newArr;
}

// 17-
//using for loop:
function aveArray(arr){
    let sumArray = 0;
    for (let index = 0; index < arr.length; index++) {
        sumArray += arr[index];    
    }  
    return (sumArray / arr.length);
}

//using while loop:
function aveArrayWhile(arr){
    let sumArray =0;
    let index =0;
    while(index < arr.length){
        sumArray+=arr[index];
        index++;
    }
    sumArray /=  arr.length;
    return sumArray;
}


// 18-
function shorterInArray(arr){ 
    let shorterString = arr[0];
    for (let index = 0; index < arr.length; index++) {
    if(arr[index].length <= arr[index].length){
        if(arr[index].length < shorterString.length){
            shorterString = arr[index];
        }
    } 
    else if(arr[index].length >= arr[index].length){
        if(arr[index+1].length < shorterString.length){
            shorterString = arr[index+1];
        }
    }    
    }
    return shorterString;
}


// 19-
//using for loop:
function repeatChar(string , char){
    let intCount =0;
    for (let index = 0; index < string.length; index++) {
    if(string[index] === char){
        intCount++;
    }
    } 
    return intCount;
}

//using while loop:
function repeatCharWhile(string , char){
    let intCount =0;
    let index = 0;
    while(index < string.length){
        if(string[index] === char){
            intCount++;
        }
        index++;
    }
    return intCount;
}


// 20-
//using for loop:
function evenIndexOddLength(arr){
    let i = 0;
    let newArray = [];
    for (let index = 0; index < arr.length; index++) {
        if(index % 2 === 0){
            if(arr[index].length % 2 ===1 ){
                newArray[i] = arr[index];
                i++;
            }
        }        
    }
    return newArray;
}


//using while loop:
function evenIndexOddLengthWhile(arr){
    let i = 0;
    let newArray= [];
    let index = 0;
    while(index < arr.length){
        if(index % 2 === 0){
            if(arr[index].length % 2 ===1 ){
                newArray[i] = arr[index];
                i++;
            }
        }        
        index++;
    }
    return newArray;
}
 




/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
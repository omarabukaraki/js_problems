
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


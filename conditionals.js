/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor*/
/******* Start Your Code *********/
// function displayLargeNumber(){
//     let num1 = parseInt(prompt("Enter the first integer number:"));
//     let num2 = parseInt(prompt("Enter the second integer number:"));
//     if (num1 > num2) {
//         window.alert("The larger integer number is: " + num1);
//     } else if (num2 > num1) {
//         window.alert("The larger integer number is: " + num2); 
//     } else {
//         window.alert("Both integers number are equal."); 
//     }
// }
// displayLargeNumber();
 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

// function findSign(num1 , num2 , num3){
//     let numbers = num1 * num2 * num3 ;
//     if(numbers>0){
//         window.alert("The sign is + ");
//     }else if(numbers<0){
//         window.alert("The sign is - ");
//     }else{
//         window.alert("The number = 0 ");
//     }
// }
// findSign(3 , -7 , -2);

/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4  8 2 7  2 
Output : 4, 0, -1 */
/******* Start Your Code *********/
// function sortNumbers(num1,num2,num3){
//     let numbers = [num1,num2,num3];
//     let num = num1;
    
//     for (let index = 0; index < numbers.length; index++) {
//         for (let i = 0; i < numbers.length; i++) {
//         if(numbers[index] > numbers[i]){
//             num = numbers[index];
//             numbers[index] = numbers[i];
//             numbers[i] = num;
//         }            
//         }
        
//     }
//     window.alert(numbers);
// }
// sortNumbers(-2, -1, 3)
// console.log()
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
// function largeNumber(num1, num2, num3, num4, num5){
//     let numbers = [num1, num2, num3, num4, num5];
//     let lN = num1;
//     for (let index = 0; index < numbers.length; index++) {
//         if(numbers[index]> lN){
//             lN = numbers[index];
//         }        
//     }
//     window.alert(lN);
// }
// largeNumber(-5, -2, -6, 0, -1 );
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
//   function displayHello(x,y){
//     if(x> y ){
//         window.alert("Hello World");
//     }else{
//         window.alert("Goodbye");
//     }
//   }
//   displayHello(1,5)
 /******* End Your Code ********* */

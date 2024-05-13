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


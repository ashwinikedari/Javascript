//given a sorted array of integers. write a function which accept a value and returns index where value passed 
//to the function is located. if the value is not found return -1;

// solution 1: **********************************************
function search(arr, n){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===n){
            return i;
        }
    }
    return -1;
}

let arr = [-1,0,1,2,3,4,5,6]
let n = 6;
console.log(search(arr,n));

// solution 2:
// *******************************************************************************************************

function search1(arr, n) {
    let x = 0, y = arr.length - 1;
    while (x <= y) {
        let middle = Math.floor((x + y) / 2);
        if (n < arr[middle]) {
            y = middle - 1;
        } else if (n > arr[middle]) {
            x = middle + 1;
        } else {
            return middle;
        }
    }
    return -1;
}

console.log(search1(arr,n));
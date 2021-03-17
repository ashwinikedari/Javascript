// write a function which accepts the sorted array as input
// and return the first pair of element which sum is zero.

//Naive solution:***********************************************************************/

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (sum === 0 ) {
                return [arr[i], arr[j]]
            }
        }
    }
}

let arr = [0,1,2,3,4];

console.log(sumZero(arr));

//Refactor code*******************************************************************************/

function sumZero1(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum>0){
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero1(arr));
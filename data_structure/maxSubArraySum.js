//calculate sum of n consecutive numbers in given array;
// solution 1:

function maxSubArraySum(arr,num){
let maxSum = 0;
let tempSum = 0;
for(let i=0;i<num;i++){
    maxSum += arr[i]; //add window of first num numbers.
}
tempSum = maxSum;
for(let j = num ; j<arr.length;j++){
    tempSum = tempSum - arr[j-num] + arr[j]; //then add next number and subtract first number from window.
    maxSum = Math.max(tempSum, maxSum);
}
return maxSum;
}

let arr = [1,10,3,4,5], n= 2;
console.log(maxSubArraySum(arr,n));
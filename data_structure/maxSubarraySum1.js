function maxSubarraySum(arr,num){
    if(arr.length < num) return null;
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
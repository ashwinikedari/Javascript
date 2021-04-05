const isOdd=(num)=>num%2 !==0;

function someRecursive(arr, isOdd){
    if(arr.length===0) return false;
    if(isOdd(arr[0])) return true;
    return someRecursive(arr.slice(1), isOdd);
}

console.log(someRecursive([2,2,3,6], isOdd));
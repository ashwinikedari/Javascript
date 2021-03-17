//implement a function which takes sorted array as input and return length of unique values.

//ES6 solution************************************************** 
function countUniqueValues(arr) {
  return arr.filter((elem,i,arr)=>arr.indexOf(elem) ===i).length;
}

let arr=[1];
console.log(countUniqueValues(arr));

// Solution 2:

function countUniqueValues1(arr) {
    if(arr.length == 0) return 0;
    let i=0;
    for(let j = 1; j<arr.length;j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
  }

  console.log(countUniqueValues1(arr));
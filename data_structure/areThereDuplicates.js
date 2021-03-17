// check the duplicates within arguments.

// solution using frequency counter:*****************************************
function areThereDuplicates(){
    let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
      if(collection[key] > 1) return true;
  }
  return false;
}

// console.log(areThereDuplicates(1,2,3,4,5));


// solution using multiple pointer:******************************************************
function areThereDuplicates1(...arr){
    console.log(arr);
    let args = arr.sort((a,b)=>a-b);
    console.log(args);
    let first = 0;
    let next = 1;
    while(next<args.length){
        if(args[first] === args[next]) {
            return true;
        }
        first++;
        next++;
    }
    return false;
}

// console.log(areThereDuplicates1(1,2,3,4,5,4));

// one Liner Solution******************************************************************
function areThereDuplicates2(){
    console.log(new Set(arguments).size, "\n",arguments.length );
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates2(1,2,3,4,5,4));
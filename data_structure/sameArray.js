
//compare two array such that element of second array is square of element in first array.

//SOLUTION ONE WITH LESS PERFORMANCE *******************
function same(arr1, arr2){
    if(arr1.length !== arr2.length) return false
    for(let elem of arr1){
        let index = arr2.indexOf(elem ** 2)
        if(index === -1){
            return false
        }
    }
    return true;
}
let arr11 = [1,2,3,4];
let arr22 = [1,4,9,32]
console.log(same(arr11,arr22));
//**************************************************************** */

//SOLUTION TWO WITH more efficient PERFORMANCE 
function same1(arr1, arr2){
    if(arr1.length !== arr2.length) return false
    let counterObj1 = {};
    let counterObj2 = {};
    for(let elem of arr1){
        counterObj1[elem] = (counterObj1[elem] || 0) + 1
    }
    for(let elem of arr2){
        counterObj2[elem] = (counterObj2[elem] || 0) + 1
    }
    for(let key in counterObj1){
        if(!(key ** 2 in counterObj2 )){
            return false;
        }
        if(counterObj2[key ** 2] !== counterObj1[key]) {
            return false;
        }
    }
    return true;
}
let arr12 = [1,2,3,5];
let arr13 = [1,4,9,25];
console.log(same1(arr12, arr13));
/************************************************************************* */
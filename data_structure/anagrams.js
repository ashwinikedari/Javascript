//An anagram is a word, phrase, or name formed by rearranging the 
//letters of another, such as spar, formed from rasp


//solution 1:

function checkAnagrams(str1, str2) {

    if (str1.length !== str2.length) return false;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let counterObj1 = {};
    let counterObj2 = {};
    for (let elem of str1) {
        counterObj1[elem] = (counterObj1[elem] || 0) + 1;
    }
    for (let elem of str2) {
        counterObj2[elem] = (counterObj2[elem] || 0) + 1
    }
    // console.log(JSON.stringify(counterObj1) + '\n' + JSON.stringify(counterObj2))
    for(let key in counterObj1){
        if(!(key in counterObj2)){
            return false
        }
        if(counterObj2[key] !== counterObj1[key]){
            return false;
        }
    }
    return true;
}
let str11 = "cinema";
let str22 = "icemaN";
console.log(checkAnagrams(str11, str22));

//solution 2:**********************************************************************************************

function checkAnagrams1(str1, str2){
    if (str1.length !== str2.length) return false;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let lookup = {};
    console.log(lookup);
    for (let elem of str1) {
        lookup[elem] = (lookup[elem] || 0) + 1;
    }
    console.log(JSON.stringify(lookup));
    for(let elem of str2){
        if(!lookup[elem]){
            return false
        } else{
            lookup[elem] -= 1;
        }
    }
    console.log(JSON.stringify(lookup));
    return true;
}

let str11 = "cinema";
let str22 = "icemai";
console.log(checkAnagrams1(str11, str22));
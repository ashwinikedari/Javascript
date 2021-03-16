//count alphanumeric character from input string

function charcount(str){
    let result = {};
for(let char of str){
    // char = char.toLowerCase()
    // if(result[char]>0){
    //     result[char] = result[char]+1
    // }else{
    //     result[char] = 1;
    // }
    // if(/[0-9a-z]/.test(char))
    if(isAlphanumeric(char)){
    char = char.toLowerCase()
    result[char] = ++result[char] || 1 
    }
}
    return result;
}

function isAlphanumeric(char){
    code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
    return true;
}
console.log(charcount(""));
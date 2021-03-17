// input: two string.
// check: characters in first string should appear in subsequent order in second string.

function isSubsequence(str1, str2){
    if(!str1) return true;
    let i =0 , j=0;
    while(j<str2.length){
        if(str1[j] === str2[i]){
            i++;
        }
         if(i == str1.length){
            return true;
        }
        j++;
    }
    return false;
}

//solution 2: Recursion
function isSubsequence1(str1, str2){
    if(!str1) return true;
    if(!str2) return false;
    if(str1[0] === str2[0]){
        return isSubsequence1(str1.slice(1), str2);
    }
    return isSubsequence1(str1, str2.slice(1));
}

let str1="abc";
let str2 = "acb"
console.log(isSubsequence(str1, str2));
console.log(isSubsequence1(str1, str2));




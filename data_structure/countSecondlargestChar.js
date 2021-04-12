function countChar(str){
    let count = {};
    let temp, max = 0;
    for(let c of str){
        count[c] = (count[c]||0) +1;
    }
    console.log(count);
    let sorted = Object.entries(count).sort((a,b)=>b[1]-a[1]);
    console.log(sorted[1][0]);

}
countChar("aabbbbccccc");
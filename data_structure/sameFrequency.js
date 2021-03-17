// given two numbers. find out if two numbers have same freuqency of digits. use O(n) only;

function sameFrequency(num1, num2){
    let counter1 = {};
    let counter2 = {};
    num1 = num1.toString();
    num2 = num2.toString();
    if(num1.length !== num2.length) return false;
    for(let i of num1){
        counter1[i] = (counter1[i] || 0) + 1;
    }
    for(let i of num2){
        counter2[i] = (counter2[i] || 0) + 1;
    }

    for(let key in counter1){
        if(counter1[key] !== counter2[key]){
            return false;
        }

        if(!(key in counter2)){
            return false;
        }
    }
    return true;
}

let num1 = 1234567;
let num2=6543217;
console.log(sameFrequency(num1, num2));
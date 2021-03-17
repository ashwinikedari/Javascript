// given a sorted array of integer and the target average. find the pair of values from array whose average is equal to target average.

function averagePair(arr, avg){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        let tempAvg = (arr[i] + arr[j])/2;
        if(tempAvg === avg) {
            return true
        } else if(tempAvg>avg){
            j--;
        }else{
            i++;
        }
    }
    return false;
  }

let arr =[1,3,3,5,6,7,10,12,19], avg = 6.5;
console.log(averagePair(arr, avg));
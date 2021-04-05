process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});


process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    let T = parseInt(input_stdin_array[0]);
    function isPrimen(x,y){
        let j=x, arr=[];
        while(j<y){
            let flag =true;
            for(let k=2;k<y;k++){
                if(j%k==0){
                    flag=false;
                }
          }
          if(flag){
              arr.push(j);
    // process.stdout.write("arr  : "+arr+"\n");

          }
          j++;
            
        }
        return arr;
    }

    if(T>=1 && T<=10){
        for(let i=0;i<T;i++){
         let arr = input_stdin_array[i+1].split(" ").map(e=>parseInt(e.trim()));
        let j=arr[0], arr1=[], y=arr[1];
        if(j>=2 && j<=y && y>=j && y<=10000000){
        while(j<=y){
            let flag =true;
            if(j%2==0 && j>2) flag=false;
            const s = Math.sqrt(j);
            for(let k=3;k<=s;k+=2){
                if(j%k==0 && j!==k){
                    flag=false;
    // process.stdout.write("k  : "+k+"\n");
                    break;
                }
          }
    // process.stdout.write("j  : "+j+"\n");

          if(flag){
              arr1.push(j);
    // process.stdout.write("arr1  : "+arr1+"\n");

          }
          j++;
            
        }
        
        if(arr1.length==1){
    process.stdout.write(0 +"\n");
    }else if(!arr1.length){
    process.stdout.write(-1 +"\n");
    } else{
    // process.stdout.write(arr1 +"\n");

        let diff = arr1[arr1.length-1]-arr1[0];
    process.stdout.write(diff +"\n");

    }
        }
        }
    }
    
	
	//Write code here
    
    // process.stdout.write(""+output+"\n");
});
/**
 *

Example:

Range: [ 1, 10 ]

The maximum difference between the prime numbers in the given range is 5.

Difference = 7 - 2 = 5


Range: [ 5, 5 ]

There is only one distinct prime number so the maximum difference would be 0.


Range: [ 8 , 10 ]

There is no prime number in the given range so the output for the given range would be -1.


Can you win the game?



Input Format
The first line of input consists of the number of test cases, T

Next T lines each consists of two space-separated integers, L and R



Constraints
1<= T <=10

2<= L<= R<=10^6



Output Format
For each test case, print the maximum difference in the given range in a separate line. 

 * 
*/
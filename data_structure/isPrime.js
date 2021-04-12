function isPrime(num){
   let j=2;

    while(j<num){
        let flag=true;
        for(let i=2;i<j;i++){
            if(j%i == 0){
                flag = false;
                break;
            }
        }
        if(flag){
            console.log(j);
        }
        j++;
    }
}
isPrime(15);
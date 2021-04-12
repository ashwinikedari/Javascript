function printPrime(n){
    let ct=0;let j=2;
    while(ct<n){
        let flag=true;
        for(let i=2;i<j;i++){
            if(j%i===0){
                flag=false;
                break;
            }
        }
        if(flag){
            console.log(j);
            ct++;
        }
        j++;
    }
}
printPrime(10);
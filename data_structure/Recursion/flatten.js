function flatten(arr){
    
    // return arr.reduce((t,e,i,a)=>t.concat(e), [])
    let newArr = [];
    for(var i = 0; i < arr.length; i++){
    	if(Array.isArray(arr[i])){
      		newArr = newArr.concat(flatten(arr[i]))
    	} else {
      		newArr.push(arr[i])
    	}
  } 
   return newArr; 
}

console.log(flatten([[0],[1,2,3],[4]]));
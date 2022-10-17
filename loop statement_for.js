function pickIt(arr){
    var odd=[],even=[];
    for(var i in arr) {
      arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i])
    }  
    return [odd,even];
}
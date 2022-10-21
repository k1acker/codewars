function include(arr, item){
    let inc = false
    for(var i in arr) {
      if(arr[i] === item) {
        return true
      }
    }
    return inc;
}
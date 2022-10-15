function countSheeps(arrayOfSheep) {
    let count = 0;
    for (var i in arrayOfSheep) {
      if(arrayOfSheep[i] == true){
        count += 1;
      }
    }
    return count;
}
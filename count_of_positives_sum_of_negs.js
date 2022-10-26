function countPositivesSumNegatives(input) {
    let count = 0;
    let sum = 0;
    for(i in input) {
      input[i] > 0 ? count += 1 : sum += input[i];
    }
    if(count == 0 && sum == 0) {
      return [];
    }
    return [count, sum];
}
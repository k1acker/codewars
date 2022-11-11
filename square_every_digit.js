function squareDigits(num) {
  num = num.toString();
  let sum = "";
  for (var i = 0; i < num.length; i++) {
    num[i] = parseInt(num[i]);
    let result = num[i] * num[i];
    result = result.toString();
    sum = sum.concat(result);
  }
  return parseInt(sum);
}

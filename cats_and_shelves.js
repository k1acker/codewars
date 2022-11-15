function solution(start, finish) {
  let count = 0;
  while (start + 3 <= finish) {
    start += 3;
    count += 1;
  }
  while (start < finish) {
    start += 1;
    count += 1;
  }
  return count;
}

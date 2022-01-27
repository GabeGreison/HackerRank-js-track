function miniMaxSum(arr) {
  let min = 0;
  let max = 0;
  arr = arr.sort();

  for (var i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }
  for (var i = 1; i < arr.length; i++) {
    max += arr[i];
  }

  console.log(min, max);
}

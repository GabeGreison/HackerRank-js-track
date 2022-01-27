function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  const len = arr.length;

  arr.forEach((element) => {
    if (element > 0 && element <= 100) {
      positives++;
    } else if (element < 0) {
      negatives++;
    } else {
      zeros++;
    }
  });

  console.log(positives / len);
  console.log(negatives / len);
  console.log(zeros / len);
}

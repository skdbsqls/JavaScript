// 비효율적
var numbers = [10, 20, 3, 16, 45];
var max = (min = numbers[0]); // 10

numbers.forEach(function (number) {
  // 현재 돌아가는 숫자가 max값 보다 큰 경우
  if (number > max) {
    // max 값을 교체
    max = number;
  }

  // 현재 돌아가는 숫자가 min값 보다 작은 경우
  if (number < min) {
    // min 값을 교체
    min = number;
  }
});

console.log(max, min);

numbers.forEach(function (number, index) {
  console.log(index + "번째 값 => " + number);
});

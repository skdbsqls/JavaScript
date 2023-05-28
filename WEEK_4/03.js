// 무슨 제어권?
// 2. 인자에 대한 제어권을 갖는다.
// map ? 배열에 대한 메서드로 배열의 하나하나를 순회하면서 가공해서 새로운 배열을 리턴
// 기존 배열을 변경하지 않고 새로운 배열을 생성
var newArr = [10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
});

// 결과는 뭐가 될까?
console.log(newArr); // [ 15, 25, 35 ]

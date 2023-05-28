// 무슨 제어권?
// 2. 인자에 대한 제어권을 갖는다.
// map ? 배열에 대한 메서드로 배열의 하나하나를 순회하면서 가공해서 새로운 배열을 리턴
// 기존 배열을 변경하지 않고 새로운 배열을 생성

// index : 사람이 이해할 수 있는 변수명일 뿐
// currentValue : 사람이 이해할 수 있는 변수명일 뿐
var newArr = [10, 20, 30].map(function (index, currentValue) {
  console.log(index, currentValue);
  return currentValue + 5;
});

// 결과는 뭐가 될까?
console.log(newArr); // [ 5, 6, 7 ]

// index를 curretValue로 currentValue를 index로 인식!
// map()를 잘 사용하려면, 사용방법 그대로 사용해야만 한다!

// 사용자가 아무리 인자를 제어하고자 해도 제어할 수 없음
// 인자에 대한 제어권을 갖을 수 있는 건 콜백함수를 만든 map!!
// map만이 콜백함수의 인자에 제어권을 갖는 것!
// 인자의 순서까지도 제어권이 매개변수를 전달 받은 코드에게 귀속 됨!
// 즉, 제어권이 넘어갈 map함수의 규칙에 맞게 호출해야 한다~!

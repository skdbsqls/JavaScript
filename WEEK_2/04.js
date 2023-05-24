// 일급 객체로서의 함수
// 일급객체(First-class Object)란 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체
// == 다른 객체들과 일반적으로 같다!
// == 매개변수로 전달 가능! return문으로 출력 가능! 모든 연산이 가능!
// 함수를 매우 유연하게 사용 가능!

// (1) 변수에 함수를 할당할 수 있다.
// 함수가 마치 값으로 취급된다.
// 함수가 나중에 사용될 수 있도록 조치가 되었다.
// const sayHello = function () {
//   console.log("Hello!");
// };

// (2) 함수를 인자로 다른 함수에 전달할 수 있다.
// (2)-1. 콜백함수 : 매개변수로써 쓰이는 함수
// (2)-2. 고차함수 : 함수를 인자로 받거나 return하는 함수
// * 콜백함수는 고차함수의 한 종류라고 볼 수 있음!
function callFunction(func) {
  // 매개변수로 받은 변수가 사실, 함수다.
  func();
}

const sayHello = function () {
  console.log("Hello!");
};

callFunction(sayHello);
// callFunction(function () {
//   console.log("Hello!");
// });

// (3) 함수를 반환할 수 있다.
function createAdder(num) {
  return function (x) {
    return x + num;
  };
}

const addFive = createAdder(5);
// const addFive = function (x) {
//   return x + 5;
// };

console.log(addFive(10)); // 15
// const addFive = function (10) {
//   return 10 + 5;
// };

// return을 함수로 할 수 있다.
// 함수의 return이 함수다!
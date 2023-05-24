// ES6

// 2015년도 이전 => var
// (1) es6 => let(변수), const(상수)

// (2) arrow function
function add() {}

var add = function () {};

var add = (x) => {
  return 1;
};

var add = (x) => 1;

// (3) 삼항 연산자
// condition ? true인경우 : false인경우

console.log(true ? "참" : "거짓");
console.log(false ? "참" : "거짓");
console.log(1 === 1 ? "참" : "거짓");
console.log(1 !== 1 ? "참" : "거짓");

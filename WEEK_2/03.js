// 단축 속성명 : propeerty shorthand
const name = "nbc";
const age = "30";

// key - value
const obj = { name, age };
const obj1 = { name: name, age: age };
// value(실질적인 데이터)에는 변수로 쓸 수 있음
// key와 value는 이름이 겹칠 수 있음 --> 생략 가능!
// 즉, key과 value는 똑같으면 생략할 수 있다!!!

// 전개 구문 = spread operator
// destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나!
let arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]
console.log(...arr); // 1 2 3

let newArr = [...arr, 4];
console.log(arr); // [1, 2, 3]
console.log(newArr); // [1, 2, 3, 4]

// 객체
let user = {
  name: "nbc",
  age: 30,
};

let user2 = { ...user };
console.log(user); // { name: 'nbc', age: 30 }
console.log(user2); // { name: 'nbc', age: 30 }

// 나머지 매개변수(rest parameter)
// 매개변수의 개수를 정확히 모를 때 ...args
// ...으로 args 명시해줘야만 나머지 매개변수라는 것을 인식할 수 있음!
function exampleFunc(a, b, c, ...args) {
  console.log(a, b, c); // 1 2 3
  console.log(args); // [ 4, 5, 6, 7 ]
  console.log(...args); // 4 5 6 7
}

exampleFunc(1, 2, 3, 4, 5, 6, 7);

// 템플릿 리터럴(Template Literal)
// ``(백틱)
// 템플릿 리터럴 사용방법 : `${ }`
const testValue = "안녕하세요!";
console.log(`Hello World ${testValue}`); // Hello World 안녕하세요!
// 템플릿 리터럴은 멀티라인을 지원!!
// 따옴표 기반의 문자열 표현은 멀티라인을 지원하지 않음!
console.log(`
    Hello
        My name id Javascript!!!!
        
        Nice to meet you!!!
`);

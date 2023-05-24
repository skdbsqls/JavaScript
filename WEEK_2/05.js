// 일급객체로서의 함수(2)
// 스코프{} 안에서 'this'는 자기 자신 객체 즉, person
const person = {
  name: "John",
  age: 31,
  isMarried: true,
//   sayHello: () => {
//     console.log(`Hello, My name is ${this.name}`);
//     // -> Hello, My name is undefined
//     // 화살표 함수는 this를 바인딩 하지 않는다!
//   },
  sayHello: function () {
    console.log("Hello, My name is " + this.name);
    // -> Hello, My name is John
    console.log(`Hello, My name is ${this.name}`);
    // -> Hello, My name is John
  },
};

person.sayHello();

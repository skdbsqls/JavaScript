// 구조분해할당 : destructuring(de + structure + ing)
// de = not
// structure = 구조
// 배열이나 객체의 속성(요소)을 분해해서 그 값을 변수에 담을 수 있게 해줌

// (1) 배열의 경우 : 순서가 중요!
// let [value1, value2] = [1, "new"];
// // console.log("1", value1);
// // console.log("2", value2);

// let arr = ["value1", "value2", "value3"];
// let [a, b, c, d = 4] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// d의 초기 값을 설정해주지 않는 경우 undefined
// d = 4 (초기값 셋팅)

// (2) 객체인 경우 : key가 중요!
// let user = {
//   name: "nbc",
//   age: 30,
// };

// 구조분해할당
// let { name, age } = {
//   name: "nbc",
//   age: 30,
// };

// console.log("name => ", name); // string
// console.log("age => ", age); // number

// 새로운 이름으로 할당
let user = {
  name: "nbc",
  age: 30,
  birthday: "yesterday",
};

// let { name: newName, age: newAge } = user;

// console.log("newName => ", newName);
// console.log("newAge => ", newName);

let { name, age, birthday = "today" } = user;
console.log(name);
console.log(age);
console.log(birthday);
// birthday가 undefined일 때 "today"로 초기값을 설정한다면 "today"
// 즉, 초기값 설정은 undefined일 때만 의미가 있음!
// birthday의 value가(yesterday) 정해져 있을 경우에는 초기값 설정은 의미가 없음!

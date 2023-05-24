// 객체
// key - value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다!
// value에 올 수 있는 데이터타입에는 제한이 없다!

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
// let person = {
//   name: "홍길동",
//   age: 30,
//   gender: "남자",
// };

// // 1-2. 생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 20, "여자");

// 2. 접근하는 방법
// console.log("1", person.name);
// console.log("2", person.age);
// console.log("3", person.gender);

// 3. 객체 매소드(객체가 가진 여러가진 기능 : Object.~~~)
// 3-1. Object.key() : key를 가져오는 메소드
let person = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

let keys = Object.keys(person);
console.log("keys => ", keys);

// 3-2. values
let values = Object.values(person);
console.log("values => ", values);

// 3-3. entries
// key와 value를 묶어서 배열로 만든 배열!! (2차원 배열)
let entries = Object.entries(person);
console.log("entries => ", entries);

// 3-4. assign
// 복사
let newPerson = {};
Object.assign(newPerson, person, { gender: "여자" });
console.log("newPerson => ", newPerson);

// 3-5. 객체 비교
// 크기가 상당히 커요!! -> 메모리에 저장할 때 별도의 공간에 저장
// person1 별도 공간에 대한 주소
// let person1 = {
//   name: "홍길동",
//   age: 30,
//   gender: "남자",
// };

// // person2 별도 공간에 대한 주소
// let person2 = {
//   name: "홍길동",
//   age: 30,
//   gender: "남자",
// };

// string의 경우 직접 값을 저장
let str1 = "aaa";
let str2 = "aaa";

// console.log("answer => ", person1 === person2); // false (주소는 서로 다름)
// console.log("answer2 => ", str1 === str2); // true (값이 같음)

// // 주소값을 문자열화 시키는 방법
// console.log(JSON.stringify(person1) === JSON.stringify(person2));

// 3-6. 객체 병합
let person1 = {
  name: "홍길동",
  age: 30,
};

// person2 별도 공간에 대한 주소
let person2 = {
  gender: "남자",
};

// ... : spread operator
let perfectMen = { ...person1, ...person2 };
console.log("perfectMan => ", perfectMen);

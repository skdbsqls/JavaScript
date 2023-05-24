// 배열

// 1. 생성
// 1-1. 기본 생성
// let fruits = ["사과", "바나나", "오렌지"];

// // 1-2. 크기 지정
// let numbers = new Array(5);

// console.log(fruits.length);
// console.log(numbers.length);

// 2. 요소 접근
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// 3. 배열 메소드
// 3-1. push : 배열의 마지막 요소을 추가
// let fruits = ["사과", "바나나"];
// console.log("1 => ", fruits);

// fruits.push("오렌지");
// console.log("2 => ", fruits);

// // 3-2. pop : 배열의 마지막 요소을 삭제
// let fruits = ["사과", "바나나"];
// console.log("1 => ", fruits);

// fruits.pop();
// console.log("2 => ", fruits);

// 3-3. shift : 배열의 첫번째 요소를 삭제
// let fruits = ["사과", "바나나", "키위"];
// console.log("1 => ", fruits);

// fruits.shift();
// console.log("2 => ", fruits);

// 3-4. unshift : 배열의 첫번째 요소를 추가
// let fruits = ["사과", "바나나", "키위"];
// console.log("1 => ", fruits);

// fruits.unshift("포도");
// console.log("2 => ", fruits);

// 3-5. splice : (시작 인덱스, 삭제하는 요소의 개수, 대체할 요소)
// let fruits = ["사과", "바나나", "키위"];
// console.log("1 => ", fruits);

// fruits.splice(1, 1, "포도");
// console.log("2 => ", fruits);

// 3-6. slice : (시작 인덱스, 끝 인덱스) 시작 인덱스부터 끝 인덱스 전까지 새로운 배열
// let fruits = ["사과", "바나나", "키위"];
// let slicedFruits = fruits.slice(0, 2);
// console.log(slicedFruits);

// forEach, map, filter, find : 콜백함수를 받는 메소드s
let numbers = [4, 1, 5, 4, 5];

// (1) forEach
// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
// numbers.forEach(function (item) {
//   console.log("item입니다 => " + item);
// });
// // item입니다 => 1
// // item입니다 => 2
// // item입니다 => 3
// // item입니다 => 4
// // item입니다 => 5

// // (2) map : 항상 원본 배열의 길이만큼이 return 된다.
// // 기존의 배열을 가공해서 새로운 배열을 생성
// // --> 반드시 return문을 가져야만 함!
// let newNumbers = numbers.map(function (item) {
//   return item * 2;
// });

// console.log(newNumbers);
// [ 8, 2, 10, 8, 10 ]

// (3) filter : 조건에 해당되는 것만 return 된다.
// 새로운 배열을 생성 --> 반드시 return문 필요
let filteredNumbers = numbers.filter(function (item) {
  return item === 5;
});

console.log(filteredNumbers);

// (4) find : 조건에 맞는 것 중 첫번째 요소만 반환
// 새로운 값을 return
let result = numbers.find(function (item) {
  return item > 3;
});
console.log(result);

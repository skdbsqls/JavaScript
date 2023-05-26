// apply를 적용해서 효율적으로 만들기
// apply -> ({}, [])
var numbers = [10, 20, 3, 16, 45];

var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);

console.log("apply => ", max, min);

// spread operator
console.log(numbers); // [ 10, 20, 3, 16, 45 ]
console.log(...numbers); // 10 20 3 16 45

var max = Math.max(...numbers);
var min = Math.min(...numbers);

console.log("spread => ", max, min);

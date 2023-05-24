function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

function add(x, y) {
  return x + y;
}

const multiplyByTow = multiplyBy(2);
// const multiplyByTow = function (x) {
//   return x * 2;
// };
const multiplyByThree = multiplyBy(3);
// const multiplyByThree = function (x) {
//   return x * 3;
// };

console.log(multiplyByTow(10)); // 20
console.log(multiplyByThree(10)); // 30

const result = add(multiplyByTow(5), multiplyByThree(10));
console.log(`FINAL => ${result}`);

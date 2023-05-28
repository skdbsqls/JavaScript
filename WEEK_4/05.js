// Array.prototype.map을 직접 구현해보쟈ㅏ!

// map 함수는 항상 첫번째 인자로 콜백함수를 두번째 인자로 this를 받는다!
Array.prototype.map123 = function (callback, thisArg) {
  // map 함수(는 결론적으로 새로운 배열을 return) 에서 return할 결과 배열
  var mappedArr = [];

  // this.length의 this는? map123의 호출주체(배열)
  for (var i = 0; i < this.length; i++) {
    // call의 첫 번째 인자는 thisArg가 존재하는 경우는 그 객체, 없으면 전역객체
    // call의 두 번째 인자는 this가 배열일 것(호출의 주체가 배열)이므로,
    // i번째 요소를 넣어서 인자로 전달
    var mappedValue = callback.call(thisArg || globalThis, this[i]);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};

var newArr = [1, 2, 3].map123(function (number) {
  return number * 2;
});

console.log(newArr);

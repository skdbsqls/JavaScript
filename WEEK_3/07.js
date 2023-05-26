// 재귀적 수행!!
var copyObjectDeep = function (target) {
  var result = {};
  if (typeof target === "object" && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
      console.log(prop);
    }
  } else {
    result = target;
  }
  return result;
};

// 위의 패턴을 적용한다면??
var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
  },
};

var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;

console.log(obj); // { a: 1, b: { c: null, d: [ 1, 2 ] } }
console.log(obj2); // { a: 3, b: { c: 4, d: { '0': 1, '1': 3 } } }

// 재귀적 수행을 통해 깊은 복사를 완벽하게 구현!!
// 불변성을 유지하는 또다른 방법으로는 'JSON'을 이용하는 방법도 존재
// 단, 완벽한 방법은 아님!

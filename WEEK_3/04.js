// 이런 패턴은 어떨까요? (얉은 복사)
var copyObject = function (target) {
  var result = {};

  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

// 위 패턴을 우리 예제에 적용해봅시다.
var user = {
  name: "wonjang",
  gender: "male",
};

var user2 = copyObject(user);
user2.name = "twojang";

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
} // 유저 정보가 변경되었습니다.

console.log(user.name, user2.name); // wonjang twojang
console.log(user === user2); // false

// ?문제점? 중첩된 객체에 대해서는 완벽한 복사를 할 수 없다!

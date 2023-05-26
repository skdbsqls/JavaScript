var copyObject = function (target) {
  var result = {};

  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

// 중첩된 객체를 깊은 복사한다면??
var user = {
  name: "wonjang",
  urls: {
    portfolio: "http://github.com/abc",
    blog: "http://blog.com",
    facebook: "http://facebook.com/abc",
  },
};

// 1차 copy
var user2 = copyObject(user);

// 2차 copy -> 이렇게까지 해줘야만 해요..!!
user2.urls = copyObject(user.urls);

user.urls.portfolio = "http://portfolio.com";
console.log(user.urls.portfolio === user2.urls.portfolio); // false

user2.urls.blog = "";
console.log(user.urls.blog === user2.urls.blog); // false

// ?문제점? 중첩된 객체의 또 중첩된 객체는 3차 copy, 4차 copy 등 계속 해줘야함
// ?따라서 이는 임시 방편에 불과!
// ?해결? 재귀적 수행!!

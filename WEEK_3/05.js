var copyObject = function (target) {
  var result = {};

  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

// 중첩된 객체를 얉은 복사 한다면??
var user = {
  name: "wonjang",
  urls: {
    portfolio: "http://github.com/abc",
    blog: "http://blog.com",
    facebook: "http://facebook.com/abc",
  },
};

var user2 = copyObject(user);

user2.name = "twojang";

// 바로 아래 단계에 대해서는 불변성을 유지하기 때문에 값이 달라지죠.
console.log(user.name === user2.name); // false

// 더 깊은 단계에 대해서는 불변성을 유지하지 못하기 때문에 값이 같아요.
// 더 혼란스러워 지는거죠 ㅠㅠ
user.urls.portfolio = "http://portfolio.com";
console.log(user.urls.portfolio === user2.urls.portfolio); // true

// 아래 예도 똑같아요.
user2.urls.blog = "";
console.log(user.urls.blog === user2.urls.blog); // true

// ? 중첩된 객체의 경우 여전히 주소를 복사할 수밖에 없다!
// ?해결? 깊은 복사!!

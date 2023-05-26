// user 객체를 생성
var user = {
  name: "wonjang",
  gender: "male",
};

// 이름을 변경하는 함수, 'changeName'을 정의
// 입력값 : 변경대상 user 객체, 변경하고자 하는 이름
// 출력값 : 새로운 user 객체
// 특징 : 객체의 프로퍼티에 접근하는 것이 아니라, 아예 새로운 객체를 반환 -> 불변!
var changeName = function (user, newName) {
  return {
    name: newName,
    gender: user.gender,
  };
};

// 변경한 user정보를 user2 변수에 할당하겠습니다.
// 불변이기 때문에 user1은 영향이 없어요!
var user2 = changeName(user, "twojang");

// 결국 아래 로직이 수행되겠네요.
if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name); // wonjang twojang
console.log(user === user2); // false

// 항상 가변하다라는 위험성을 불변한 것처럼 바꾸려는 노력을 항상 머리속에 있어야함!
// 불변성을 유지하자!!

// ?문제점? 객체의 프로퍼티(속성)가 많아질수록 return 해야하는 것도 많아짐(하드코딩이 많아짐)
// ?해결? 얉은 복사!!

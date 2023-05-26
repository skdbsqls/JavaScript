// 출력의 결과를 제출해주세요, 그리고 그 이유를 최대한 상세히 설명해주세요
// **주의사항 : 브라우저에서 테스트해주세요(Chrome → 개발자 도구 → 콘솔에 입력하여 실행)**

var fullname = "Ciryl Gane";

var fighter = {
  fullname: "John Jones",
  opponent: {
    fullname: "Francis Ngannou",
    getFullname: function () {
    // 1. 객체 this 바인딩 : "Francis Ngannou" 
      return this.fullname;
    },
  },

  getName: function () {
    // 2. 객체 this 바인딩 : "John Jones"
    return this.fullname;
  },

  getFirstName: () => {
    // 3. 객체 this 바인딩 : "Ciryl Gane"
    return this.fullname.split(" ")[0];
  },

  getLastName: (function () {
    // 4. 객체 this 바인딩 : "Ciryl Gane"  
    return this.fullname.split(" ")[1];
  })(),
};

console.log("Not", fighter.opponent.getFullname(), "VS", fighter.getName());
// Not Francis Ngannou VS John Jones

// 1. fighter.opponent.getFullname() : 호출의 주체가 명확한 메서드.
// 2. fighter.getName() : 호출의 주체가 명확한 메서드.

console.log(
  "It is",
  fighter.getName(),
  "VS",
  fighter.getFirstName(),
  fighter.getLastName
); // It is John Jones VS Ciryl Gane

// 3. fighter.getName() : 호출의 주체가 명확한 메서드.
// 4. fighter.getFirstName() : 화살표 함수 내에서는 this binding 하지 않음. 
// 따라서 상위의 this bind을 바라 봄.
// 5. fighter.getLastName : 호출부가 없음! 스스로 선언 및 호출! 호출의 주체가 없는 즉시실행함수!
// getLastName의 호출주체가 fighter이라는 것이 아니라, fighter.getLastName을 통해서 getLastName을 콜한 것.
// 호출주체가 명확하지 않음, 전역객체를 바라 봄.

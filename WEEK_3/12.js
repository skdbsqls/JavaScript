var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

// method 함수 안의 this는 항상 obj!!
obj.method(2, 3); // 1 2 3
// 명시적 binding
// call
obj.method.call({ a: 4 }, 5, 6); // 4 5 6
// call : 기존의 있었던 메서드 뒤에 붙어서 즉시 실행을 해주되,
// 앞에 this로 묶을 객체를 붙여주고 나서 나머지 매개변수를 넣어준다.

// apply
obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6
// apply : call과 완전히 동일한 기능(즉시 실행)!!
// 단, 뒤에 오는 매개변수를 [](대괄호)로 묶어주어야 함!
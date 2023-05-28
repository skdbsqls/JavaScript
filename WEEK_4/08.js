// bind
var obj1 = {
  name: "obj1",
  func: function () {
    console.log(this.name);
  },
};

//함수 자체를 obj1에 바인딩
//obj1.func를 실행할 때 무조건 this는 obj1로 고정해줘!
//원래 선언 해놓은 this를 바인드 한 것
var boundObj1 = obj1.func.bind(obj1);
setTimeout(boundObj1, 1000);

var obj2 = { name: "obj2" };
//함수 자체를 obj2에 바인딩
//obj1.func를 실행할 때 무조건 this는 obj2로 고정해줘!
//어떤 this도 원하는대로 바인딩 가능..?
setTimeout(obj1.func.bind(obj2), 1500);

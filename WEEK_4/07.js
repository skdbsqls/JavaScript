// [ 콜백 함수 내부의 this에 다른 값 바인딩하기]
//콜백 함수 내부에서 this가 문맥에 맞는 개체를 바라보게 할 수는 없을까요?
//콜백 함수 내부의 this에 다른 값을 바인딩하는 방법

var obj = {
  name: "obj1",
  func: function () {
    var self = this;
    return function () {
      console.log(self.name);
    };
  },
};

var callback = obj.func();
setTimeout(callback, 1000);

// closure 방식: 현재 함수가 끝났음에도 불구하고 영향력을 끼친다

var obj = {
  name: "obj1",
  func: function () {
    var self = this; // this를 참조한 부분!!
    return function () {
      // return을 한 부분 (참조하고 있는 부분?)
      console.log(self.name);
    };
  },
};
// 참조하고 있는 부분 안에서 쓰는 self라는 변수가 바깥에 있기 때문에
// 바깥에서 참조하고 있는 self가 살아있다..!

var callback = obj.func();
// var callback = function () {
//   console.log(self.name);
// };

// setTimeout(function () {
//   console.log(self.name);
// }, 1000);

//
var obj = {
  name: "obj1",
  func: function () {
    console.log(obj1.name);
  },
};
setTimeout(obj.func, 1000);
// 결과만을 위한 코딩 => 하드코딩... 완전 10점/100점짜리 코딩
// this의 장점을 전부 놓쳐버린... 코딩

//
var obj1 = {
  name: "obj1",
  func: function () {
    var self = this;
    return function () {
      console.log(self.name);
    };
  },
};
var obj3 = { name: "obj3" };
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000); // -> 아주 좋은 예시..?

// var obj2 = {
//   name: "obj2",
//   func: obj1.func,
// };
// var obj2 = {
//   name: "obj2",
//   func: function () {
//     var self = this;
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

// var callback2 = obj2.func();
// // var callback2 = function () {
// //   console.log(self.name);
// // };
// // var callback2 = function () {
// //   console.log("obj2");
// // };

// setTimeout(callback2, 1500);

// 무슨 제어권?
// 1. 호출 시점에 대한 제어권을 갖는다.

// setInterval()
// ? 각 호출 사이에 고정된 시간 지연으로 함수를 반복적으로 호출하거나 코드 스니펫을 실행하는 메서드
// ? 반복해서 매개변수로 받은 콜백함수의 로직을 수행
var count = 0;
var cbFunc = function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};

cbFunc(); // 0
// ? cbFunc라는 함수를 직접 호출할 경우, 호출주체가 우리가 됨
// 호출 시점에 대한 제어권도 우리가 갖게 됨 (즉시 실행해!)

var timer = setInterval(cbFunc, 300);
// ? 매개변수로 cbFunc 넣어줬을 때는
// ? 콜백함수로 cbFunc를 가져간 setInterval이 호출 심정에 대한 제어권을 갖게 됨!

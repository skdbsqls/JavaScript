function solution(absolutes, signs) {
  var answer = 0;

  // 실제 수들의 배열 선언
  let real = [];

  // 1. 실제 수들을 real 배열에 담기
  for (let i = 0; i < absolutes.length; i++) {
    // true일 경우 양수로, false일 경우 -1을 곱해 음수
    if (signs[i] === true) {
      real.push(absolutes[i]);
    } else if (signs[i] === false) {
      real.push(absolutes[i] * -1);
    }
  }

  // 2. for문을 사용하여 실제 값의 합 구하기
  for (let i = 0; i < real.length; i++) {
    answer += real[i];
  }

  return answer;
}

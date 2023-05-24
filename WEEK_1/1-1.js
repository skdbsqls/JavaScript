var str1 = "pPoooyY";
var str2 = "Pyy";

function solution(s) {
  var answer = true;

  // 1. 대문자로 통일
  s = s.toUpperCase();

  // 문자열의 요소에서 P의 개수를 더한 값을 sumP, Y의 개수를 더한 값을 sumY
  let sumP = 0;
  let sumY = 0;

  // 2. for문을 통해서 문자열의 요소에서 P와 Y를 찾아보자
  for (let i = 0; i < s.length; i++) {
    // P가 있으면 sumP에, Y가 있으면 sumY에 1씩 더해줌
    if (s[i] === "P") {
      sumP++;
    }
    if (s[i] === "Y") {
      sumY++;
    }
  }

  // 3. sumP와 sumY의 값을 비교
  if (sumP === sumY) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

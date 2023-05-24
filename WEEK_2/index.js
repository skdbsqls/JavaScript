function solution(strings, n) {
  var answer = [];

  // 1. 문자열 앞에 인덱스에 해당하는 문자를 붙인다
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
    answer.push(strings[i]);
  }

  // 2. 사전순으로 정렬한다
  answer.sort();
  console.log(answer);

  // 3. 정렬된 배열의 가장 앞 글자를 뗀다
  for (let i = 0; i < answer.length; i++) {
    answer[i] = answer[i].substr(1);
  }

  return answer;
}

// substr(), substring(), slice() 모두 종료 index(end)를 입력하지 않으면,
// 시작 index부터 문자열의 끝까지를 리턴한다!

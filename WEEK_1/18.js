// while문
// while (조건) {
//     // main logic
//     // 증감
// }

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// while문을 활용해서, 3초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예

// let i = 3;

// while (i < 100) {
//   if (i % 5 === 0 && i >= 5) {
//     console.log(i + "는 5의 배수입니다!!");
//   }
//   i++;
// }

// do ~ while문

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// break
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break; // 0 1 2 3 4
//   }
//   console.log(i);
// }

// continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // 0 1 2 3 4 6 7 8 9
  }
  console.log(i);
}

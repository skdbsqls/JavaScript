// Gatters와 Setters
// 객체지향 프로그래밍 언어 -> G, S
// 클랙스 --> 객체(인스턴스)
// 프로퍼티(construtor)
// new Class(a, b, c)

class Rectangle {
  constructor(height, width) {
    // underscore : private(은밀하고, 감춰야 할 때)
    this._height = height;
    this._width = width;
  }
  // width를 위한 getter
  get width() {
    return this._width;
  }
  // width를 위한 setter
  set width(value) {
    // 검증
    if (value <= 0) {
      console.log("[오류] 가로길이는 0보다 커야 합니다!");
    } else if (typeof value !== "number") {
      console.log("[오류] 가로길이로 입력된 값이 숫자타입이 아닙니다!");
      return;
    }
    this._width = value;
  }
  // height를 위한 getter
  get height() {
    return this._height;
  }
  // height를 위한 setter
  set height(value) {
    // 검증
    if (value <= 0) {
      console.log("[오류] 세로길이는 0보다 커야 합니다!");
    } else if (typeof value !== "number") {
      console.log("[오류] 세로길이로 입력된 값이 숫자타입이 아닙니다!");
      return;
    }
    this._height = value;
  }

  // getArea : 가로 * 세로 => 넓이
  gerArea() {
    const a = this._width * this._height;
    console.log(`넓이는 ${a}입니다.`);
  }
}

// instance 생성
const rect1 = new Rectangle(10, 20);
rect1.gerArea();
// const rect2 = new Rectangle(10, 30);
// const rect3 = new Rectangle(15, 20);

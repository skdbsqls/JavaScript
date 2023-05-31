// 클랙스라는 설계도를 만들어봅시다!
class Person {
  // 우리는 사람이기 때문에 필수요소
  // name, age
  constructor(name, age) {
    // this = 우리가 만들 인스턴스(Person)
    // 우측의 name = 외부로부터 받아오는 것
    this.name = name;
    this.age = age;
  }

  // 메서드 형태의 동사 표현
  sayHello() {
    console.log(`${this.name}님 안녕하세요!`);
  }
  // 내 나이는 ~살이에요! 라고 출력하는 메서드를 만들어주세요
  printMyAge() {
    console.log(`${this.name} 나이는 ${this.age}살입니다.`);
  }
}

// 설계도를 통해 인스턴스(실제사물)를 만들어봅시다!
// 이름은 홍길동이고, 나이는 30살인 사람 하나를 만들어줘!!(설계도에 근거해서!)
// --> forEach를 사용해서 대량을 만들어낼 수 있음!
const person1 = new Person("홍길동", "30");
const person2 = new Person("홍길순", "25");

person1.printMyAge();
person2.printMyAge();

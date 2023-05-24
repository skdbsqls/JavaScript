const myMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);

// (1) keys()
// console.log(myMap.keys());
// --> [Map Iterator] { 'one', 'two', 'three' }
for (const key of myMap.keys()) {
  console.log(key);
}
// one
// two
// three

// (2) values()
// console.log(myMap.values());
// --> [Map Iterator] { 1, 2, 3 }
for (const value of myMap.values()) {
  console.log(value);
}
// 1
// 2
// 3

// (3) entries()
// console.log(myMap.entries());
// --> [Map Entries] { [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] }
for (const entry of myMap.entries()) {
  console.log(entry);
}
// [ 'one', 1 ]
// [ 'two', 2 ]
// [ 'three', 3 ]

// map의 사이즈(길이)
console.log(myMap.size); // 3
// key 기반 검색
console.log(myMap.has("two")); // true

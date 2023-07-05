// 배열 타입
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "winterlood"];
let boolArr = [true, false, true]; // 제네릭
let multiArr = [1, "hello"]; // 유니온 타입
// 다차원 배열 타입
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플
let tup1 = [1, 2];
let tup2 = [1, "hello", true];
tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);
console.log(tup1);
export {};

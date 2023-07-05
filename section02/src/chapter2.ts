// 배열 타입

let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winterlood"];
let boolArr: Array<boolean> = [true, false, true]; // 제네릭

let multiArr: (number | string)[] = [1, "hello"]; // 유니온 타입

// 다차원 배열 타입
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);

console.log(tup1);

const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  // [5, "조아무개"], // 오류 발생
];

export {};

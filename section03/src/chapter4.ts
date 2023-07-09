/* -------------------------------------------------------------------------- */
/*                                    대수 타입                                   */
/* -------------------------------------------------------------------------- */

// 합집합(Union), 교집합(InterSection)

/* -------------------------------------------------------------------------- */
/*                                합집합 타입(Union)                               */
/* -------------------------------------------------------------------------- */

// 합집합 타입 - Union 타입
let a: string | number;

a = 1;
a = "hello";

// Union 타입으로 배열 타입 정의하기
let arr: (number | string | boolean)[] = [1, "hello", true];

// Union 타입과 객체 타입
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  // ✅
  name: "",
  color: "",
};

let union2: Union1 = {
  // ✅
  name: "",
  language: "",
};

let union3: Union1 = {
  // ✅
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = { // ❌
//   name: "",
// };

/* -------------------------------------------------------------------------- */
/*                            교집합(Intersection) 타입                            */
/* -------------------------------------------------------------------------- */

let variable: number & string;
// never 타입으로 추론된다

type Dog2 = {
  name: string;
  color: string;
};

type Person2 = {
  name: string;
  language: string;
};

type Intersection = Dog2 & Person2;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};

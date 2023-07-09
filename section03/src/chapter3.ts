/* -------------------------------------------------------------------------- */
/*                                 객체 타입의 호환성                           */
/* -------------------------------------------------------------------------- */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // ✅ OK
//num2 = num1; // ❌ NO

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // ✅ OK
// dog = animal; // ❌ NO

//* 모든 dog 타입의 속하는 객체는 animal 타입에 속하나, 모든 animal 타입이 dog 타입에 속하진 않는다.
//* 그러므로 animal 타입은 dog 타입의 슈퍼 타입이다.

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook; // ✅ OK
// programmingBook = book; // ❌ NO

let book2: Book = {
  // 오류 발생
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", // 초과 프로퍼티 검사 실패로 인한 오류 발생
};

let book3: Book = programmingBook; // 앞서 만들어둔 변수

// 변수를 초기화할 때 객체 리터럴을 사용하지만 않으면 발생하지 않음.
// 값을 별도의 다른 변수에 보관한 다음 변수 값을 초기화 값으로 사용하면 발생하지 않는다.

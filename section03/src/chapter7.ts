/* -------------------------------------------------------------------------- */
/*                                   타입 좁히기                                   */
/* -------------------------------------------------------------------------- */

// 조건문(if typeof === ...)으로 타입 좁히기
function func1(value: number | string) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  }
}

// instasnceof로 타입 좁히기

function func2(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
}

//* 우리가 직접 만든 타입과는 사용할 수 없음 (내장 클래스 또는 직접 만든 클래스에서만 사용 가능!)

// in 타입 가드

type Person = {
  name: string;
  age: number;
};

function func3(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}

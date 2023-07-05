/* -------------------------------------------------------------------------- */
/*                                    void                                    */
/* -------------------------------------------------------------------------- */

void function func2(): void {
  console.log("hello");
};

// return문 자체가 없는 함수의 반환 값 타입을 정의해야 할 때에는 void 타입을 이용해야 한다.

let a: void;
a = undefined;
//a = 1; // 에러 발생

// "strictNullChecks: false" 일 경우
// a = null; // 가능하다.

/* -------------------------------------------------------------------------- */
/*                                    never                                   */
/* -------------------------------------------------------------------------- */

function func4(): never {
  throw new Error();
}

let anyVar: any;

let b: never;
// b = 1;
// b = null;
// b = undefined;
// b = anyVar;

//* never로 정의하면 any를 포함해 그 어떠한 타입의 값도 이 변수에 담을 수 없다.

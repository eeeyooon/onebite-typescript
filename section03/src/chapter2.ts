/* -------------------------------------------------------------------------- */
/*                                 unknown 타입                                 */
/* -------------------------------------------------------------------------- */

let a: unknown = 1; // number -> unknown
let b: unknown = "hello"; // string -> unknown
let c: unknown = true; // boolean -> unknown
let d: unknown = null; // null -> unknown
let e: unknown = undefined; // undefined -> unknown
let f: unknown = []; // Array -> unknown
let g: unknown = {}; // Object -> unknown
let h: unknown = () => {}; // Function -> unknown

let unknownValue: unknown;

// let a: number = unknownValue;
// 오류 : unknown 타입은 number 타입에 할당할 수 없습니다.

/* -------------------------------------------------------------------------- */
/*                                  never 타입                                  */
/* -------------------------------------------------------------------------- */

function errorFunc(): never {
  throw new Error();
}

let neverVar: never;

// let a2: number = neverVar; // never -> number
// let b2: string = neverVar; // never -> string
// let c2: boolean = neverVar; // never -> boolean
// let d2: null = neverVar; // never -> null
// let e2: undefined = neverVar; // never -> undefined
// let f2: [] = neverVar; // never -> Array
// let g2: {} = neverVar; // never -> Object

/* -------------------------------------------------------------------------- */
/*                                   void 타입                                  */
/* -------------------------------------------------------------------------- */

function noReturnFuncA(): void {
  return undefined;
}

function noReturnFuncB(): void {
  return;
}

function noReturnFuncC(): void {}

/* -------------------------------------------------------------------------- */
/*                                any 타입 (치트키)                                */
/* -------------------------------------------------------------------------- */

let anyValue: any;

let num: number = anyValue; // any -> number (다운 캐스트)
let str: string = anyValue; // any -> string (다운 캐스트)
let bool: boolean = anyValue; // any -> boolean (다운 캐스트)

anyValue = num; // number -> any (업 캐스트)
anyValue = str; // string -> any (업 캐스트)
anyValue = bool; // boolean -> any (업 캐스트)

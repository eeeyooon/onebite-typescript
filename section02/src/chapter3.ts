let user: {
  id?: number;
  readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
  id: 1,
  name: "이정환",
};

// user.name = "dskfd"; // 오류 발생

console.log(user.name);

export {};

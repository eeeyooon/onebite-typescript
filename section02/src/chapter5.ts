// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 10, // 10 할당
  USER, // 11 할당(자동)
  GUEST, // 12 할당(자동)
}

// 시작하는 위치에 값을 할당하면 그 밑의 멤버들은 1씩 증가됨.

const user1 = {
  name: "이정환",
  role: Role.ADMIN, //관리자
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 회원
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 게스트
};

enum Language {
  korean = "ko",
  english = "en",
}

const user4 = {
  name: "이정환",
  role: Role.ADMIN, // 0
  language: Language.korean, // "ko"
};

// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["GUEST"] = 12] = "GUEST";
})(Role || (Role = {}));
// 시작하는 위치에 값을 할당하면 그 밑의 멤버들은 1씩 증가됨.
var user1 = {
    name: "이정환",
    role: Role.ADMIN, //관리자
};
var user2 = {
    name: "홍길동",
    role: Role.USER, // 회원
};
var user3 = {
    name: "아무개",
    role: Role.GUEST, // 게스트
};
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
var user4 = {
    name: "이정환",
    role: Role.ADMIN,
    language: Language.korean, // "ko"
};

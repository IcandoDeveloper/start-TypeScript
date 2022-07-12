// 타입을 지정하는 일반적인 방법
type Nickname = string;
type Health = number;
type Friends = Array<string>;
type Player = {
  nickname: string;
  healthBar: number;
};
const seokil1: Player = {
  nickname: "seokil",
  healthBar: 10,
};

type Food = string;

const kimchi1: Food = "delicious";

//타입을 지정된 옵션으로만 제한 할 수 있는 방법
//아래 방식처럼 특정팀을 지정해서 옵션을 제한 할 수 있음
type Team = "read" | "blue" | "yellow";
type Health3 = 1 | 5 | 10;

//타입으로 사용하는방법 vs interface사용방법
//하지만 type 방법이 interface 방법보다 활용도가 높음
//타입 사용법
type Player3 = {
  nickname: string;
  team: Team;
  health3: Health3;
};


const seokil3 = {
  nickname: "seokil3",
  team: "yellow",
  health: 10,
};

//interface사용법
//interface는 오브젝트의 모양을 타입스크립트에게 설명해주기 위해서만 사용됨
interface Player4 {
    nickname: string;
    team: Team;
    health3: Health3;
  };
  //대표적으로 type보다 활용도가 낮은 예로는 아래 식이다. 아래식처럼 에러가남 
  interface Hello = string
  
  const seokil4 = {
    nickname: "seokil4",
    team: "yellow",
    health: 10,
  };

  //interface 예시
  interface User2 {
      name : string
  }

  interface Player5 extends User2 {
  }
  const seokil6 : Player5 = {
      name : "seokil2"
  }
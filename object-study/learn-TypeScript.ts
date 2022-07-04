//typescript 변수의 타입 설정하기

// let a ="hello"
// let b = false
// let c : number[] = []
// c.push(1)
// const player = {
//     name : "Seokil"
// }

// let a : number = 1;
// let b : string = 'i1';
// let c : boolean[] = [true]

// 중복된 값을 타입 변수로 묶어 코드를 간단하게 해줌
type Player = {
  name: string;
  age?: number;
};
// 특정 변수에 있는 내부함수를 선택적으로 취하도록 하기
const playerSeokil: {
  name: string;
  age?: number;
  // ?를 써서 age의 타입을 선택적으로 만듬
  //player가 age가지거나 또는 안가지도록
} = {
  name: "seokil",
};
if (playerSeokil.age < 10)
  if (playerSeokil.age && playerSeokil.age < 10) {
    //위의 경우는 에러가뜸
    // 위의 경우는 number 선택권을 주었기 때문에 옳게 작성한 것임
  }
const playerPotato: Player = {
  name: "potato",
};
//일반적인 방법
// function playerMaker(name: string) :Player {
//   return {
//     name,
//   };
// }
//화살표함수를 이용한 방법
const playerMaker = (name: string): Player => ({ name });
const seokil = playerMaker("seokil");
seokil.age = 12;

// //readonly기능
// type Age = number;
// type Name = string
// type Player2 = {
//   readonly name2:Name
//   age?: Age
// };
// const playerMaker2 = (name: string): Player => ({ name });
// const seokil2 = playerMaker2("seokil2");
// seokil2.age = 12;
// seokil2.name = "yoon"

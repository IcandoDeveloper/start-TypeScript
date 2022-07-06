//call Signatures
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

//overloading
//overloading의 경우 함수가 여러개의 call signatures를 가질 때 발생
type Add2 = {
  (c: number, d: number): number;
  (c: number, d: string): number;
};

const add2: Add2 = (c, d) => {
  if (typeof d === "string") return c;
  return c + d;
};

//overloading이 실제로는 이런식으로 쓰임
//패키지나 라이브러리 디자인할 때 쓰이는 코드
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else {
    console.log(config.path, config.state);
  }
};

// overloading 주의점
//아래처럼 callsignature가 여러개 있는경우 파라미터의 개수를 맞춰줘야됨
type Add3 = {
  (a1: number, b1: number): number;
  (a1: number, b1: number, c1: number): number;
};
//아래의 경우는 파라미터 c1이 return되지 않았기 때문에 에러가남
// const add3 = Add3 = (a1, b1, c1) => {
//   return a1 + b1
// }
//
const add3 = (Add3 = (a1, b1, c1?: number) => {
  if (c1) return a1 + b1 + c1;
  return a1 + b1;
});
//polymorphism
//쉽게 한국어로 풀어서 말하면 많은 구조라고 볼 수 있다.
//concrete type이란?
//number , boolean, string, void, unknown같은걸 말함
//아래 concrete type들을 generic타입으로 바꿀거임
//generic이란 타입의placeholder 와 같은거다.
//어떤타입이 들어갈지 모를 때 사용
type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
  (arr: (number | boolean)[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, false]);

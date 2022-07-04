//type의 종류
// a 는 자바스크립트타입
let a: undefined = undefined;
// b 는 타입스크립트타입이면서 자바스크립트타입
let b: null = null;

//선택적type 물음표(?)를 이용해 age를 사용할지 말지 선택
type Player3 = {
  age?: number;
};

//any type
//any는 타입스크립트로부터 빠져나오고 싶을 때 쓰는 타입
//왜냐하면 any는 모든 타입을 사용할 수 있기 때문
//하지만 any를 사용하게 되면 타입스크립트의 오류 보호장치로부터 빠져나오는 것이기 때문에 웬만하면 사용하지않는게 좋음
let c: any[];

//unknown
//모르는 타입은 어떻게 표현해야할까? unknown으로 표현하면 됨.
let d: unknown;

if (typeof d === "number") {
  let e = d + 1;
}
//unknown형식이지만 toUpperCase의 경우 문자열일 때 사용할 수 있기 때문에 오류
d.toUpperCase;
if (typeof d == "string") {
  let e = d.toUpperCase();
}

//void
//void란 아무것도 return하지않는 함수를 말함
//아래처럼 void를 적어도 되고 void를 안적어도됨
function hello(): void {
  console.log("x");
}

//never
//많이 사용은 하지 않지만 알아둬야함
//never는 함수가 절대 return하지 않을 때 사용
//첫 번째 예시
function hello2(): never {
  throw new Error("x");
}
//두 번째 예시
//else부분 name이 never부분임 코드가 잘 작동한다면 절대로 실행되지 않기 때문
function hello3(name: string | number) {
  if (typeof name === "number") {
    name;
  } else {
    name;
  }
}

//Tuple의 조건
//1. 최소한의 길이를 가져야 한다.
//2. 특정 위치에 특정 타입이 있어야 한다.

//array를 만들 때 자바스크립트 예시
//[string , number , boolean]
["seokil", 14, false];

//array를 만들 때 타입스크립트 예시
const player: [string, number, boolean] = ["seokil", 1, true];
//첫번째 인덱스는 string인데 number로 입력해서 에러
player[0] = 1;

//Tuple + readonly
//읽기전용기능을 마찬가지로 이용가능
const player2: readonly [string, number, boolean] = ["seokil2", 2, true];
player2[1] = 2;

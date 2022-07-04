//call Signatures
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

//overloading
//overloading의 경우 함수가 여러개의 call signatures를 가질 때 발생
type Add2 = {
  (c: number, d: number): number;
  (c: number, d: string): number;
};

const add2: Add2 = (c, d) => c + d;

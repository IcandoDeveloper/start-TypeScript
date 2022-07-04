//readonly기능
//읽기전용 기능으로 수정을 하려고 하는경우 오류로부터 보호해준다.
type Age = number;
type Name = string;
type Player2 = {
  readonly name2: Name;
  age?: Age;
};
const playerMaker2 = (name: string): Player2 => ({ name });
const seokil2 = playerMaker2("seokil2");
seokil2.age = 12;
seokil2.name2 = "yoon";

//readonly기능 2번째 예시
//읽기전용으로만들어 수정을 못하게 막아줌
const numbers: readonly number[] = [1, 2, 3, 4];
numbers.push(1);

//readonly기능 3번째 예시
//push는 안됨 filter나 map은 사용가능
//왜냐하면 filter나 map은 array를 바꾸지 않기 때문
const names: readonly string[] = ["1", "2"];
names.push(3);

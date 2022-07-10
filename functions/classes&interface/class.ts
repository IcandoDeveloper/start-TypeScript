//class
//private나 public함수를 사용하면 자바스크립트에서 봤었던 this.firstName = firstName 을 대신적어주는 역할을 함
// class Player2 {
//   constructor(
//     private firstName: string,
//     private lastName: string,
//     public nickname: string
//   ) {}
// }

//abstract 추상클래스를 뜻함 추상클래스란?
//다른클래스를 상속받을 수 있는 클래스를 말함
//추상메서드란 추상클래스로부터 상속받은 모든것들을 구현한 메서드를 의미함
// private vs protected
//private를 사용하면 인스턴스 밖에서 접근x, 다른자식클래스에서도 접근x 오직 User 클래스의 인스턴스나 메서드에서 접근가능
//즉, private의 경우는 다른 외부로 부터 보호받으면서 다른자식클래스에서 사용하지못하는 반면,
//  protected의 경우는 다른 외부로  부터 보호받으면서 다른자식클래스에서 사용하기 원할 때 사용한다.
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    // public nickname: string,
    protected nickname: string
  ) {}
  abstract getNickName(): void;
  // 앞에 private 를 붙이면 작동하지 않게됨
  // 또한 내가 직접적으로 메서드를 구현해서는 안되고 메서드의 call signatuer만 적어야함
  getFullName() {
    return "${this.fistName} ${}this.lastName}";
  }
}
// 타입스크립트에서 추상클래스는 아래와같이 상속 받을 수 있음
// class player2 extends User {

// }
// 타입스크립트에서 추상클래스는 아래와같이 새로운 인스턴스를 만들지 못함 그저 상속만 받을 수 있음
// 하지만 getFullName 메서드를 이용해 User로부터 상속 받았으므로 Player2에 사용할 수 있음
// const seokil = new User ("seokil" , "yoon", "석일")
//아래처럼 .nickname을 추상클래스로 사용하려면 위에 pricate를 protected로 변경해주면 됨
class Player2 extends User {
  getNickName(): void {
    console.log(this.nickname);
  }
}
const seokil = new Player2("seokil", "yoon", "석일");
seokil.getFullName();

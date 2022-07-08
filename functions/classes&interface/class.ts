//class
//private나 public함수를 사용하면 자바스크립트에서 봤었던 this.firstName = firstName 을 대신적어주는 역할을 함
class Player2 {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
}

abstract class User {
    constructor(
        protected firstName:string,
        protected lastName:string,
        public nickname:string
    ) {}
    abstract getNickName():void

    getFulName(){
        return `${this.firstName} ${this.lastName}`
    }
}
// 추상 클래스는 상속 받을 수만 있고, 인스턴스를 직접 만들지 못한다.
// const youngwoo = new User("a", "b" "jerry"); 에서 User부분에 오류가 발생한다.
// private field에서 선언된 값은 인스턴스 밖에서 접근 할 수 없고 다른 자식 클래스에서도 접근 할 수 없다 private -> pubilc 으로 변경하면 사용이 가능하다.
// protected extends로 접근해야 오류가 없고 외부에서 접근하면 오류가 발생한다.


// tslint:disable-next-line:max-classes-per-file
class NPlayer extends User {
    getNickName(): void{
        // tslint:disable-next-line:no-console
        console.log(this.nickname);
    }
}

const youngwoo = new NPlayer("김", "영우", "jerry");

youngwoo.getFulName()

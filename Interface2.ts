// abstract class UserName {
//     constructor(
//         protected firstName:string,
//         protected lastName:string
//     ) {}
//     abstract sayHi(name:string):string
//     abstract fullName():string
// }
// // tslint:disable-next-line:max-classes-per-file
// class PlayerInfo extends UserName {
//     sayHi(name:string){
//         return `Hello ${name} i'm ${this.fullName()}`
//     }
//     fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }


interface UserName {
    firstName:string,
    lastName:string,
    sayHi(name:string):string
    fullName():string
}
interface Human {
    health:number
}

class PlayerInfo implements UserName {
    constructor(
        public firstName:string,
        public lastName:string,
        public health:number
    ){}
    sayHi(name:string){
        return `Hello ${name} i'm ${this.fullName()}`
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
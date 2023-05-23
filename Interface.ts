type Nickname = string
type HealthBar = number
// tslint:disable-next-line:array-type
type Friends = Array<string>

// type PlayerHealth = {
//     nickname:Nickname,
//     healthBar:HealthBar
// }

interface PlayerHealth {
    nickname:Nickname,
    healthBar:HealthBar
}

const young : PlayerHealth = {
    nickname:"young",
    healthBar:10
}


type Food = string;

const coffee:Food = "delicious"


// interface는 object형태만 사용 가능하다.
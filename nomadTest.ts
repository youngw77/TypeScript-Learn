type Add = (a: number, b: number) => number

const add: Add = (a, b) => a + b


let sum: Add = (a, b) => {
    const result = a + b
    return result
};


// concreate type: number, boolean, string, void, unknown

// type SuperPrint = <T, M>(arr: T[], b:M) =>T

// const superPrint: SuperPrint = (arr) => arr[0]

function superPrint<V>(a: V[]){
    return a[0]
}

superPrint([1,2,3,4])
superPrint([true, false, true])
superPrint(["a","b","c"])
superPrint([1,2,true,false])


type Player<E> = {
    name:string
    extraInfo:E
}
type NicoExtra = {
    favFood:string
}
type NicoPlayer = Player<NicoExtra>

const nico: NicoPlayer = {
    name:"nico",
    extraInfo: {
        favFood:"kimchi"
    }
}


const lynn: Player<null> = {
    name:"lynn",
    extraInfo:null
}
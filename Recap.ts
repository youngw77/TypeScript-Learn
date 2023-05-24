type Words = {
    [key:string]: string
}


class Dict {
    private words: Words
    constructor(){
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    def(term:string){
        return this.words[term];
    }
    update(word:Word){
        if(this.words[word.term] !== undefined){
            this.words[word.term] = word.def;
        }
    }
    del(term:string){
        if(this.words[term] !== undefined){
            delete this.words[term];
        }

    }
}


// tslint:disable-next-line:max-classes-per-file
class Word {
    constructor(
        public readonly term:string,
        public readonly def:string
    ) {}
}

const kimchi = new Word("kimchi", "korea kimchi");
const bob = new Word("bob", "korea bob");
const dict = new Dict()

dict.add(kimchi);
dict.add(bob);
// tslint:disable-next-line:no-console
console.log(dict.def("kimchi"));
// tslint:disable-next-line:no-console
console.log(dict.def("bob"));

dict.update(new Word("bob", "change"));
// tslint:disable-next-line:no-console
console.log(dict.def("bob"));
dict.del("bob");
// tslint:disable-next-line:no-console
console.log(dict.def("bob"));


type PlayerA = {
    name:string
}
type PlayerAA = PlayerA & {
    lastName:string
}
type PlayerAAA = PlayerAA & {
    health:number
}
const playerA:PlayerAAA = {
    name:"youngwoo",
    lastName:"kim",
    health:3
}


interface PlayerB {
    name:string
}
interface PlayerB {
    lastName:string
}
interface PlayerB {
    health:number
}
const playerB:PlayerB = {
    name:"youngwoo",
    lastName:"kim",
    health:3
}
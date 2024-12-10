import {IsPlayer} from '../interface/IsPlayer.js';

export class Player implements IsPlayer {
    // private name: string;
    // public age: number;
    // readonly country: string;

    // constructor(n:string, a:number, c:string) {
    //     this.name = n;
    //     this.age = a;
    //     this.country = c;
    // }

    // shortcut if access modifiers have
    constructor(
        public name: string,
        public age: number,
        readonly country: string
    ) {}

    info() {
        return {
            n: this.name,
            a: this.age,
            c: this.country
        }
    }
}
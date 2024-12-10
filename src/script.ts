import {Player} from './classes/Player.js';
import { IsPlayer } from './interface/IsPlayer.js';
/** typescript explicit & union types */

let a: string | number;
let b: (string | number) [] = [];
let c: object; // explicit type

/** dynamic type or any type */

let d: any;
let e: any[];

/** function type | function in typescript */

const myFunc = (a:number, b:number, c:string = '10') : number => {
    return a + b;
}

/** type aliases */

type stringOrNumber = string | number;
type userType = { name: string; age: number}
const userDetails = (id: stringOrNumber, user: userType) => {
    return {id, user}
}
const sayHello = (user: userType) => {
    return user;
}

/** function signatures */

let add: (x: number, y: number) => number;
add = (a: number, b:number) => {
    return a+b;
}
let calculation: (x: number, y: number, z: string) => number;
calculation = (a: number, b: number, c: string) => {
    if(c === 'add') {
        return a+b;
    } else {
        return a-b;
    }
}

/** classes & access modifiers */

// class Player {
//     private name: string;
//     public age: number;
//     readonly country: string;

//     constructor(n:string, a:number, c:string) {
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }

//     // shortcut if access modifiers have
//     // constructor(
//     //     private name: string,
//     //     public age: number,
//     //     readonly country: string
//     // ) {}

//     info() {
//         return {
//             n: this.name,
//             a: this.age,
//             c: this.country
//         }
//     }
// }
const mash = new Player('Mash', 40, 'BD')
const sakib = new Player('sakib', 38, 'BD')
let soumya: IsPlayer;
soumya = new Player('Soumya', 30, 'BD')
const players: Player[] = []
players.push(mash)
players.push(sakib)
// console.log(players)

/** module system */

/** interface */

interface RectangleOptions {
    width: number,
    length: number
}
function drawRectangle (options: RectangleOptions) {
    let width = options.width;
    let length = options.length;
    return width * length;
}
let options = {
    width: 30,
    length: 20,
    height: 20
}
drawRectangle(options)

/** Generics */

const addId = <T extends object>(obj: T) => {
    let id = Math.floor(Math.random()*100);
    return {...obj, id}
}
let user = addId({
    name: 'Sakib',
    age: 40,
    country: 'Bangladesh'
});

interface APIResponse1<T> {
    status: number;
    type: string;
    data: T
}

const response: APIResponse1<object> = {
    status: 200,
    type: 'success',
    data: {
        name: 'test',
        something: 300
    }
}

/** enum types */

enum RType { success, failure, unauthenticated, forbidden }
interface APIResponse<T> {
    status: number;
    type: RType;
    data: T
}

const response2: APIResponse<object> = {
    status: 200,
    type: RType.success,
    data: {
        name: 'test',
        something: 300
    }
}

/** tuples */

let g = [2, 'hello', {p:3}];
let h:[number, string, object] = [4, 'world', {t:1}]
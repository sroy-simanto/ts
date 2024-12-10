export interface IsPlayer {
    name: string;
    age: number;
    readonly country: string;

    info(): object;
}
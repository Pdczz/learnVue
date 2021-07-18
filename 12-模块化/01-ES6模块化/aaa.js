
let name='小明';
let age=12;
let flag=true
function sum(sum1,sum2){
    console.log(sum1 + sum2) ;
}
export {flag,sum}
export var sex='meal';
export function f() {
    console.log(1)
}
export class Person{
    constructor(name,age) {
        this.name=name;
        this.age=age
    }
    run(){
        console.log("run");
    }
}

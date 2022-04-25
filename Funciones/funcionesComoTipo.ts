function multiplicar(x:number, y: number):number {

    return x*y    
}

let functionMultiplicar = multiplicar;
let functionMultiplicar2:(x: number, y: number)=>number;
functionMultiplicar2=multiplicar;

console.log(functionMultiplicar(3,4));
console.log(functionMultiplicar2(8,4));

type Operacion = (valor1:number,valor2:number,valor3:number)=>number


function operacion(x:number,y:number,z: number,func:Operacion):number {
    
        return func(x,y,z);
}

console.log(operacion(1,3,4,(valor1:number,valor2:number,valor3):number=>{return valor1*valor2*valor3}));
console.log(operacion(14,3,9,(valor1:number,valor2:number,valor3):number=>{return valor1+valor2+valor3}));
console.log(operacion(20,8,7,(valor1:number,valor2:number,valor3):number=>{return valor1/valor2/valor3}));



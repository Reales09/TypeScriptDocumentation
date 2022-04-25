function sumar(num1:number,num2:number) {
    
    console.log("Función suma");
    
    return (num1+num2);
}


function fibonacci(vecesSuccesion:number) {    
    
    let numeros=[0,1];
    let contador=2;

    while (contador<vecesSuccesion) {    

        console.log("Función Fibonacci");
    numeros[contador] = sumar(numeros[contador-2],numeros[contador-1])

    contador ++
    }
    
    return numeros;

}

function sinRetornoNiParametros(x:string):void{
    console.log(x);
    
}

console.log(fibonacci(15));
 

//console.log(sumar(3,5));
//sinRetornoNiParametros("Hola");

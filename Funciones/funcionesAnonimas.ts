let sumarAnonima = (x:number, y:number):number => {return x+y}

let fibonacciAnonima = (vecesSuccesion:number) => {
    let numeros=[0,1];
    let contador=2;

    while (contador<vecesSuccesion) {    

        console.log("Función Fibonacci");
    numeros[contador] = sumarAnonima(numeros[contador-2],numeros[contador-1])

    contador ++
    }
    
    return numeros;
}

console.log(fibonacciAnonima(15));

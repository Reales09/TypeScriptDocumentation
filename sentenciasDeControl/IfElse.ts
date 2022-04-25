//IF ELSE

let condicion = true;

if (condicion) {
    
    console.log("Este se ejecuta siempre");
    
}

condicion=false;

if (condicion) {
    
    console.log("Este no se ejecutara nunca");
    
}

if (condicion) {
    console.log("Hago esto si la condicion es true");
} else {
    console.log("Hago esto si la codicion es false");
}

let x: number =5;
let y: number = 2;

if (x+y>10) {
    console.log("Es mayor que 10");
} else if(x+y==9) {
    console.log("Es igual que 9");
}else{
    console.log("Es menor que 9");
    
}

//OPERADOR TERNARIO
//Condion ? true : false

x>y ? console.log("x es mayor que y") : console.log("x es menor que y");

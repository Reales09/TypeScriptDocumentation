abstract class Matematicas{
    public x: number;
    public y: number;
    public resultado: number = 0;

    constructor (v1:number, v2:number){
        this.x = v1;
        this.y = v2;
    }

    abstract operacion():void;

    mostrarResultado():void{
        console.log("El resultado de la operacion es "+this.resultado);
        
    }
}

class Suma extends Matematicas {

    constructor(v1:number, v2:number) {
        super(v1,v2)
    }
    operacion(): void {
        this.resultado = this.x + this.y;
    }
}

class Resta extends Matematicas {

    constructor(v1:number, v2:number) {
        super(v1,v2)
    }
    operacion(): void {
        this.resultado = this.x - this.y;
    }
}

let prueba = new Suma(4,80)
prueba.operacion()
prueba.mostrarResultado()

let prueba2 = new Resta(4,80)
prueba2.operacion()
prueba2.mostrarResultado()
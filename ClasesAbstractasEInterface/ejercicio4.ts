/*
1) Definir una interfaz vehiculo que tienen que implementar la case coche
y la clase abstracta vehiculoPesado que posteriormente será implementado por la clase camion

*/

interface Vehiculo{

    velocidad:number;
    peso:number;
    color:string;

    dameVelocidad():void;
    damePeso():void;
    dameColor():void;

}

class Coche implements Vehiculo{
    velocidad: number;
    peso: number;
    color: string;

    constructor(vel:number,p:number,c:string){
        
        this.velocidad = vel;
        this.peso = p;
        this.color = c;
        
    }

    dameVelocidad(): void {
        console.log(`Velocidad ${this.velocidad}`);
        
    }
    damePeso(): void {
        console.log(`peso ${this.peso}`);
    }
    dameColor(): void {
        console.log(`color ${this.color}`);
    }

}


abstract class VehiculoPesado implements Vehiculo {
    velocidad: number;
    peso: number;
    color: string;
    numeroDeRuedas:number;

    constructor(vel:number,p:number,c:string,n:number){
        
        this.velocidad = vel;
        this.peso = p;
        this.color = c;
        this.numeroDeRuedas =n;
        
    }


    dameVelocidad(): void {
        console.log(`Velocidad ${this.velocidad}`);
        
    }
    damePeso(): void {
        console.log(`peso ${this.peso}`);
    }
    dameColor(): void {
        console.log(`color ${this.color}`);
    }

   abstract dameNumeroRuedas():void;
        

}

class Camion extends VehiculoPesado {
    dameNumeroRuedas(): void {
        console.log("El numero de ruedas es "+ this.numeroDeRuedas);
        
    }

}

let c = new Coche(110,1000,"Verde");
c.dameColor();
c.damePeso();
c.dameVelocidad();

let camion = new Camion(100,4000,"azul",20)
camion.dameColor();
camion.dameNumeroRuedas();
camion.damePeso();
camion.dameVelocidad();
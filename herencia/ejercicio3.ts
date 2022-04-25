/* 1) Crear una superclase animal que nos diga el anima es domestico o no
el tiempo de gestacion y que el si anima es domestico se pueda modificar con getter y setter
2) crear una clase mamifero y otra ave que hereden de animal
3) crear un clase gat y otra agila que hereden de las clase correspondientes 

*/

class Animal {

    private _domestico:boolean;
    tiempogestacion:number;

    
    public get domestico() : boolean {
        return this._domestico;
    }

    
    public set domestico(valor : boolean) {
        this._domestico = valor;
    }
    
    


    constructor(d:boolean,t:number ) {
        this._domestico = d;
        this.tiempogestacion = t;
        
    }
    datos(){
        if (this._domestico == true) {
            console.log(`El animal es domestico y tiene ${this.tiempogestacion} meses de gestación `);
        } else {
            console.log(`No es domestico es un animal salvaje y tiene ${this.tiempogestacion} meses de gestación`);
            
        }
        
        
    }
}

class Mamifero extends Animal {
    
    nombre:string;
    
    constructor(domestico:boolean,tiempoGestacion:number,n:string) {
        super(domestico,tiempoGestacion)
        this.nombre = n;
        
    }
    datos(){
        if (this.domestico == true) {
            console.log(`El animal es domestico y tiene ${this.tiempogestacion} meses de gestación y el nombre es ${this.nombre} `);
        } else {
            console.log(`No es domestico es un animal salvaje y tiene ${this.tiempogestacion} meses de gestación y el nombre es ${this.nombre}`);
            
        }
    }
    
}
class Ave extends Animal {

    /*
    constructor(parameters) {
        
    }
    */
}

class GatoM extends Mamifero {
    /*
    constructor(parameters) {
        
    }
    */
}

class Aguila extends Ave {

    /*
    constructor(parameters) {
        
    }
    */
}

let animal1 = new Animal(false, 5)
animal1.datos();

let mamifero = new Mamifero(true,8,"Maydel")
mamifero.datos()
mamifero.domestico=false;
mamifero.datos()

class Padre{
    private _nombre:string;

    constructor(n:string){
        this._nombre = n;

    }

    get nombre():string{
        return this._nombre;
    }

    
    public set nombre(value : string) {
        this._nombre = value;
    }
    


    dameNombre(){
        
        console.log("Mi nombre es: "+this.nombre);
        
    }
}

class Hijo extends Padre {
    

    
    edad:number;
    constructor(nombre:string,e:number){
        super(nombre);
        this.edad = e;

    }

    dameNombre(): void {
        
        console.log("xxxxxxxxxxxxxxxxxxx");
        
    }

    dameEdad(){
        console.log(`Mi edad es ${this.edad}`);
        
    }

}

class Nieto extends Hijo {

    

    dameEdad(): void {
        
        console.log(1);
        
    }

}



let padre1 = new Padre("Reales");
padre1.dameNombre();
console.log(padre1.nombre);
padre1.nombre = "Yofo";
console.log(padre1.nombre);





let hijo1 = new Hijo("Steven",11);



hijo1.dameNombre()

hijo1.dameEdad()

let nieto = new Nieto("Pepe",2);
nieto.dameEdad()


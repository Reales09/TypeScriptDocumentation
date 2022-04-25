class Ejemplo{
    public num:number =0;
    static estatico: number;

    public cambiar(n:number){
        this.num = n;
        Ejemplo.estatico++;
    }

    static metodoStico():void{
        console.log("Hola Mundo");
        
    }

}
Ejemplo.estatico=31;
console.log(Ejemplo.estatico); 

let e = new Ejemplo();
e.cambiar(23);
console.log(Ejemplo.estatico);
console.log(e.num);

Ejemplo.metodoStico();

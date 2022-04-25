

interface Animal
{
    nombre:string,
    edad: number,
    datos():void
}

class Hanster implements Animal{

    nombre: string;
    edad: number;
    //esp:especiesPerro
    datos(): void {
        console.log(`Mi gato se llama: ${this.nombre} tiene la edad de ${this.edad}}`);

    }

    constructor(n:string,e:number){

        this.nombre = n;
        this.edad = e;
        //this.esp = esp

    }
}

type Animal2=
{
    nombre:string,
    edad: number,
    datos():void
}

let jirafa: Animal2={

    nombre:"Jirafita",
    edad: 2,
    datos():void {
        console.log(`Mi gato se llama: ${this.nombre} tiene la edad de ${this.edad} `);

    },
}

jirafa.datos()

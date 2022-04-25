enum especiesPerro{comun, chihuahua, puddu,siberiano}

interface animal
{
    nombre:string,
    edad: number,
    datos():void
}


class Perro implements animal{

    nombre: string;
    edad: number;
    esp:especiesPerro
    datos(): void {
        console.log(`Mi gato se llama: ${this.nombre} tiene la edad de ${this.edad} y es la especie ${especiesPerro[this.esp]}`);

    }

    constructor(n:string,e:number,esp:especiesPerro){

        this.nombre = n;
        this.edad = e;
        this.esp = esp

    }

}

let miPerro = new Perro("Rufo",3,especiesPerro.comun);
miPerro.datos()
miPerro.nombre="fifi"
miPerro.datos()
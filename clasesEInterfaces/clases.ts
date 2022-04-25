enum  especies{comun, Angora,Siames,Persa}

class Gato {
    nombre:string;
    edad:number;
    esp:especies

    constructor(n:string,e:number,esp:especies){

        this.nombre = n;
        this.edad = e;
        this.esp = esp

    }

    datoGato():void {
        console.log(`Mi gato se llama: ${this.nombre} tiene la edad de ${this.edad} y es la especie ${especies[this.esp]}`);
    }


}

let miGato = new Gato("Garfield",7,especies.Angora);
let miGato2 = new Gato("Babuino",3,especies.comun);

miGato.datoGato();

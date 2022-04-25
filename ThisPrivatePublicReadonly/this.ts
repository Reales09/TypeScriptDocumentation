//caso1
class MiObjeto{

    cadena:string;
    constructor(s:string){
        
        this.cadena=s;
    }

    datos(){
        console.log(this.cadena);
        
    }
}

let p=new MiObjeto("xxx");
p.datos();

//Caso 2
let imprimir = function (cad1:string,cad2:string) {
    return{
        nombre: cad1,
        devuelveCadena: function () {
            console.log(this.nombre);
            
        },
        nombre2:{
            nombre:cad2,
            devuelveCadena: function () {
                console.log(this.nombre);
                                
            }
        }
    }
}

let aux = imprimir("Hola","Adios");
aux.devuelveCadena();
aux.nombre2.devuelveCadena();

//caso 3

let nf={
    datos:p.datos
}

nf.datos();
interface Personas{

    nombre:string;
    dameNombre():void;
}

interface Casa{
    direccion:string;
    dameDireccion():void;
}

abstract class Empleado implements Personas, Casa{

    static empresa:string;

    static datosEmpresa(): void{
        console.log(Empleado.empresa);
        
    }

    direccion: string="";
    dameDireccion(): void {
        console.log("Dirección: "+ this.direccion);
        
    }
    nombre: string="";
    dameNombre(): void {
        console.log("Nombre: "+ this.nombre);
        
    }

    abstract datosEmpleado():void;

}

class General extends Empleado {
    datosEmpleado(): void {
        console.log(`Mis datos ${this.nombre} Direccion: ${this.direccion}`);
        
    }

}

Empleado.empresa="Yofo";
General.datosEmpresa();
let general = new General();
general.direccion="Micasa";
general.nombre="Reales";
general.dameDireccion();
general.dameNombre();

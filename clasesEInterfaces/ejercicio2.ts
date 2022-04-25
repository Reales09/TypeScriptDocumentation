class utilidades{
    numero: number;

    constructor(n:number){
        this.numero = n;
    }

    serieFibonacci():number[]{

        let numeros=[0,1];

        let contador=2;

        while (contador<this.numero) {
    
    
        numeros[contador]=numeros[contador-2] + numeros[contador-1]
           

        contador ++
        }
        console.log(numeros);
        console.log(numeros.length);

        return numeros;
    }

    numerosParesImpares(pares:boolean):string{

        let resultado: string;
        resultado ="";

        let aux=1;
        if (pares) {
            aux=0
            for (let index = 0; index < 100; index++) {
   
                if (index%2==aux) {
                    resultado += " " + index;
                } 
               
            }
    
        }

        return resultado;      

    }
}

let utilidad1 = new utilidades(15)
let utilidad2 = new utilidades(100)



let opcionUtilidades=2;

switch (opcionUtilidades) {
    case 1:
        console.log(utilidad2.serieFibonacci());
        
        break;
    case 2:
        console.log(utilidad2.numerosParesImpares(true));      
       
    break;

    default:
        console.log("Opción no existente");
        
        break;
}

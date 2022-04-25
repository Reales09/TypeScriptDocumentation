//1) Hacer la serie fibonacci en ts
//2) Devolver los primeros 100 numeros impares
//3) hacer un menu que nos devuelva una opcion u otra

//1)

/*


*/
//2



let opcion=3;
switch (opcion) {
    case 1:
        let vecesSuccesion = 15;
        let numeros=[0,1];
        let contador=2;

        while (contador<vecesSuccesion) {
    
    
        numeros[contador]=numeros[contador-2] + numeros[contador-1]
           

        contador ++
        }
        console.log(numeros);
        console.log(numeros.length);
        
        break;
    
        case 2:
            for (let index = 0; index < 100; index++) {
   
                if (index%2==1) {
                    console.log(index);
                } 
               
            }
        break;

    default:
        console.log("Opción no existe");
        
        break;
}

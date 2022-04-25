//let tipoNever =(cadena:string)=>{while(true);}

let lanzarError=(texto:string)=>
{
    throw new Error(texto);
    
}

console.log(lanzarError("Erorr"));

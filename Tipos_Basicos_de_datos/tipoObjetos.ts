//Tipos primitivos: string,number,boolean,null,undefine
//tipos no primnitivos:el resto

let casa=
{
    calle:"Calle melancolia",
    numero:13,
    portero:false,
    familia: {
        padre:"Juan",
        hijo:"Pepe"
    },
    presentacion:['hola','soy','el hijo']
}

console.log(casa);
console.log(casa.familia.padre);
//console.log(casa.calle);
//console.log(casa.numero);
//console.log(casa.portero);

let casa2:
{
    calle:string,
    numero:number,
    portero:boolean,
    familia:{
        padre:string,
        hijo:string
    }
}={
    calle:"Calle melancolia 2",
    numero:45,
    portero:true,
    familia:{
        padre:"juan",
        hijo: "Pepe"
    }
}

/*
console.log(casa2);
casa2.calle="alguna"
console.log(casa2);
*/


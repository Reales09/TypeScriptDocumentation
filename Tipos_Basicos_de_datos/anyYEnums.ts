/// Puede contener tipo de cualquier dato

let variasCosas: any[]=['Gato',3,-4,true,null,undefined]

console.log(variasCosas);

enum monedas{euro,dolar,yen}

enum animal{mamifero,anfibio,reptil,aves,pez}

let gato ={
    especie:"Comun",
    edad:7,
    animal:animal.mamifero
}

console.log(gato);

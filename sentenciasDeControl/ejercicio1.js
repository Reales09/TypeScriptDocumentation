//1) Hacer la serie fibonacci en ts
//2) Devolver los primeros 100 numeros impares
//3) hacer un menu que nos devuelva una opcion u otra
//1)
var vecesSuccesion = 15;
var numeros = [0, 1];
var contador = 2;
while (contador < vecesSuccesion) {
    debugger;
    numeros[contador] = numeros[contador - 2] + numeros[contador - 1];
    contador++;
}
console.log(numeros);
console.log(numeros.length);
//2
for (var index = 2; index < 100; index++) {
    var imPar = index % 2 == 1;
    console.log(index, imPar);
}

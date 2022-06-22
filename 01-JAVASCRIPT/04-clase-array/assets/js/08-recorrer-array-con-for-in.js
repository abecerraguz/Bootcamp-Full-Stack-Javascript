/*
=======ARRAY AVANZADOS====================================
1. Recorrear array con for in
=========================================================================
*/

let nombre = 'Juan Perez';
let nombres = ['Jorge Rojas','Pedro Fernandez','Pedro Torres', 46, true];
let lenguajes = new Array('PHP', 'JS','Vue', 'Java');

for(let lenguaje in lenguajes){
    console.log('Valor de lenguaje', lenguaje)
    console.log(`Los lenguajes son ${lenguajes[lenguaje]}`)
}


let numeros = [11, 33, 55, 77, 99];

for (let i of numeros) {
    console.log(i);     // log -> 11, 33, 55, 77, 99
}
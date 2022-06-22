/*
=======ARRAY AVANZADOS=====================================================================
1. Array Multidimencionales, los array multidimencionales
son array dentro de otro array.

2. Vamos a ver como agregar elementos a un array ,
como quitar elementos a un array
y como convertir un array a un string.
===========================================================================================
*/

let categorias = ['Acción', 'Terror', 'Comedia'];
let peliculas = ['Matrix','Duna','Spiderman','Advenger'];
let cine = ['categorias', 'peliculas'];

let indice = peliculas.indexOf('Duna');

console.log('peliculas antes',peliculas);

if(indice > -1){
    peliculas.splice(indice,1);
}
console.log(indice);
console.log(peliculas);

// AGREGAR ELEMENTOS A UN ARRAY

let elementos  = '';
do {
    elementos = prompt('Introduce una pelicula');
    peliculas.push(elementos)
} while (elementos != 'TERMINAR');
peliculas.pop();

console.log('peliculas--->', peliculas)

console.log(peliculas)

let string_peliculas = peliculas.join();
console.log(string_peliculas)

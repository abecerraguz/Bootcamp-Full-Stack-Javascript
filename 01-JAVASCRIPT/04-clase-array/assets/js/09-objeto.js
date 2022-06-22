/*
=======Objetos====================================
1. Objetos
=========================================================================
*/


let persona = new Object();

persona.nombre = 'Juan'
persona.edad = 35
persona.direccion = 'Bulnes 4469'
persona.nombre = 'Pedro';
persona.saluda = function(){
    console.log(`Hola soy ${this.nombre}`)
}

console.log('Salida de Persona--->', persona)
persona.saluda()

console.log('Salida de auto',auto)
// Se puede acceder a la informacion del objeto
// Con notacion de puntos
console.log(auto.marca)
// Con notacion de Corchete
console.log(auto['marca'])


let pelicula = {
    titulo:'Batman vs Superman',
    year:2017,
    pais:'Estados Unidos'
}


let peliculas =[
    {titulo:'Spiderman',year:2015,pais:'China'},
    pelicula
]

console.log(peliculas)

for(let index in peliculas){
    console.log(peliculas[index].pais)
}

console.log(peliculas[0].pais)

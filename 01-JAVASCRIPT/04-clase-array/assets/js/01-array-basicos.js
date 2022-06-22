/*
=======ARRAY BASICOS====================================
1. Creación de array básicos
=========================================================================
*/
let nombre = 'Juan Perez';
let colores = ['red','orange','blue']
let nombres = [ 'Jorge Rojas', 'Pedro Fernandez', 'Pedro Torres', 46, true, colores ]

let lenguajes = new Array('PHP', 'JS', 'VUE', 'JAVA')

// console.log('nombre---->',nombre)
nombres[8] = 'Prueba';
console.log('nombres--->', nombres[7])



// console.log('Lenguajes--->',lenguajes )

//Los Array tiene un indice
// console.log(nombres[1]) // Pedro Fernandez
// console.log(nombres.length)

// El largo de un arreglo se puede modificar
// nombres.length = 5
// console.log(nombres)

//Podemos agregar un nuevo elemento
nombres[5] = {direccion:'Satiago Centro'}
// nombres[6] = ['rojo','verde']

// console.log('Salida de nombres-->',nombres)

//Tabien se definen array vacios
// let info = []
// info.push()

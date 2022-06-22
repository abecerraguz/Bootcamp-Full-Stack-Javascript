'use strict'
/*
=======ARRAY AVANZADOS====================================
1. Creación de array Avanzados
=========================================================================
*/


let nombre = 'Juan Perez';
let nombres = [ 'Jorge Rojas', 'Pedro Fernandez', 'Pedro Torres', 46, true ]
let lenguajes = new Array('PHP', 'JS', 'VUE', 'JAVA')

// ITERACION DE ARRAY CON FOREACH
document.write('<h2 class="container">Lista de lenguajes de programación</h2>')
document.write('<ul class="container list-group">')

lenguajes.forEach((element,index,arr) => {

    console.log('Dato del element-->', element);
    document.write(`<li>${element}</li>`)
    // console.log('Dato del index--->',index)
    // console.log('Dato del arr--->',arr)

})
document.write('<hr>')

let hola = lenguajes.map((element,index,arr)=>{
    document.write(`<li>${element}</li>`)
})

console.log('salida de Hola',hola)





document.write('</ul>')

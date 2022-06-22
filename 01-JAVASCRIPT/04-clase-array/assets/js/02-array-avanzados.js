/*
=======ARRAY AVANZADOS====================================
1. Creación de array Avanzados
=========================================================================
*/
let nombre = 'Juan Perez';
let nombres = ['Jorge Rojas','Pedro Fernandez','Pedro Torres', 46, true];
let lenguajes = new Array('PHP', 'JS','Vue', 'Java');


// ITERACION DE ARRAY
document.write('<h2 class="container">Lista de lenguajes de programación</h2>')
document.write('<ul class="container list-group">')

    for( let i = 0; i < lenguajes.length; i++ ){
        console.log('el dato de i',i)
        document.write(`<li>${lenguajes[i]}</li>`)
    }

    document.write('<hr>')

    for(index in lenguajes){

        document.write(`<li>${lenguajes[index]}</li>`)
        // console.log('Salida de index', index)
    }

    document.write('<hr>')
    for( key of lenguajes ){
        document.write(`<li>${key}</li>`)
    }



document.write('</ul>')

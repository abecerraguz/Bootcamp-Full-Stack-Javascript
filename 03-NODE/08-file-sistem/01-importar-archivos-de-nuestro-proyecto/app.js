/* 
    Importamos nustra funcion 
    crearArchivo a traves de una desestructuracion
*/

const { crearArchivo } = require('./helpers/multiplicar')
let base = 3
crearArchivo(base)
            .then( nombreArchivo => console.log(nombreArchivo,'creada') )
            .catch( err => console.log(err))





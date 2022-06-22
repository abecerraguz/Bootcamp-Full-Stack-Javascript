const { throws } = require("assert");
const fs = require("fs");

/*
    Se sintetisa con la el metodo
    fs.writeFileSync es mas corto.
    Creamos nuestra función crearArchivo

    La convertimos en una funcion ASYNC 
    para tener el control de mi promesa
    en si el ASYNC Retorna un Reject.

    Pero además podemos tener un mejor
    control de nuestra promeso en cuanto a 
    el resolve, reject. Esto es un try, catch

*/

const crearArchivo = async(base=5) =>{

    try {

        console.clear()
        console.log('=======================')
        console.log('Tabla del:',base)
        console.log('=======================')

        let salida = ''
        for(let i = 1; i <= 10; i++ ){
            salida +=`${i}x${base} = ${base*i}\n`
        }
        console.log(salida)
        fs.writeFileSync( `tabla-${base}.txt`, salida )
        return (`tabla-${base}.txt`)
    } catch (err) {
        throw err
    }

}

/*
    Para exportar esta funcion en Node 
*/
module.exports = {
    // Se puede sintetizar
    //crearArchivo:crearArchivo
    crearArchivo
}
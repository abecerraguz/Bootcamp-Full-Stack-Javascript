/*
    CALLBACKS
    Una funcion que se ejecuta despues de un tiempo ( Ese tiempo puede ser determinado 
    por un posible porceso o busqueda ejemplo : buscar los RUT en una Base de datos).



*/

function buscar( rut, callback ){
    // console.log(rut)
    // console.log(callback)
    

    // VENTAJAS DE UN CALLBACK
    /*
        1. Es que podemos pasar parametros
        2. Otra ventaja es que la funcion no necesariamente debe retornar un valor, dado
           que esta sea una funcion asincronica o que tenga asicronia en su interior dado 
           que el proceso depende de algun otro proceso.
        3. Para poder simular un proceso o simular una funcion Async (Asincronica) , lo vamos
           a simular con una funcion setTimeOut() que se ejecuta despues de un tiempo transcurrido
    
    */

     setTimeout(()=>{
        callback('Hola soy la respuesta del callbacks')
     }, 2000 )      

}

buscar('14.676.345-5', ( info )=>{
    console.log(info)
})

// for(let i = 0; i < 10; i++){
//     console.log(`${i} x ${5} = ${i*5}`)
// }


console.log('======================================')

const getUsuarioById = ( id, callback ) =>{

    const user = {
        id,
        nombre : 'Alejandro'
    }

    setTimeout(   ()=>{
        callback( user )
    }  , 2000      )

}

getUsuarioById( 10 ,  ( usuario )=>{
    console.log( usuario.id )
    console.log( usuario.nombre.toUpperCase() )
})

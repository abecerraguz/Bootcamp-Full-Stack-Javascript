/*
    Para determinar cual cuál será la instrucción que
    necesitamos que se resuelva indispensablemente antes
    de seguir con las demás instrucciones, 
    para esto al igual que en el desarrollo frontend tenemos “async” y “await”.
*/

// Diferencia de funciones con Async y sin Async
function montarse(){
    console.log('Montandome en la bicicleta')
}
function pedalear(){
    console.log('Pedaleando')
}
montarse()
pedalear()

/**
 * Retorna 
 "Montandome en la bicicleta"
  "Pedaleando"
 */

// Ahora si queremos ejecutar primero "Montarse" y luego concatenar "pedalear"
// Podemos usar una promesa

async function montarse(){
    console.log('Montandome en la bicicleta')
}

function pedalear(){
    console.log('Pedaleando')
}

// Ejecuta "Montarse" y Luego "entonces" pedalear()
montarse().then( () => {
    pedalear()
})
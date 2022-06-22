/*
    En esta clase vamos a ver el concepto de Promesas en Javscript,
    las promesas no es más que una tarea asincrona, por naturaleza
    las promesas son asincronas, que nos permiten ejecutar un código
    diferente en diferente momento en el tiempo.





Dentro del cuerpo de la promesa vamos a dejar un console.log('Cuerpo de la promesa')

El cuerpo de la promesa se ejecuta inmediatamente,
pero la resolución de la promesa la podemos manejar ( resolve o reject ). Y esta se va a colocar
en una Pila diferente.

El que recibe el mensaje de resolve() es el then este puede recibir hasta tres argumentos y podemos
pasar desde un objeto un boleano, number, string.

Si se observa en la terminal tenemos dos situaciones, primero hay que entender
que lo que primero que se ejecuta es el hilo principal y luego el resolve que le paso el dato
a través de un callbak al then() el then atrapa el resolve.

Tambien podemos controlar el error, si la ejecutamos nos sale un error que no es de JavaScript
si no es un error forzado dado que estamos ejecutando el reject pero no lo estamos
atrapando para atraparla debemos usar un catch 

*/




console.log('INICIO')

new Promise(( resolve, reject)=>{
    console.log( 'El cuerpo de la promesa' )
    //resolve('Promesa resuelta')
    reject('Error en la promesa')
})
.then( (msg)=> console.log(msg) )
.catch( (err) => console.log(err))


console.log('FIN')
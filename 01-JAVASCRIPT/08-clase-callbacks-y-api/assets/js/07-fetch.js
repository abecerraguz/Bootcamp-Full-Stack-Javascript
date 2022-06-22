// https://developers.giphy.com/
// random?api_key=
// https://api.giphy.com/v1/gifs/random?api_key=0WGS7rWOlSefc7EpGKAS3wuvmHHTGxEm

const apiKey = '0WGS7rWOlSefc7EpGKAS3wuvmHHTGxEm';

/* 

    Vamos a tranajar con fetch API
    Este esta ya desde ECMA6 , nos permite hacer peticiones HTTP muy sencillas.
    Si dejamos el cursor encima vamos a observar que nos sale una promesa y la promesa 
    resuelve un response.

    Ponemos nuestra URL dentro del fetch con backstics.
    Como dijimos como fetch nos retorna una promesa,este debe ser atrapado con un then().

    Si observamos la informacion viene pero esta esta en el body como ReadableStream esto
    quiere decir que viene como encriptada para esto debemos parsearla o serializarla.

    Para eso ocupamos un metodo json() que es una promesa que resuleve lo que se de la
    solicitud que estamos haciendo con un then.

    Podemos mejorar el código haciendo lo siguiente:

    .then( resp => resp.json())
    .then( img => {
        console.log(img)
    })

    Podemos desestructurar para solo sacar data






*/
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
// .then((resp)=>{
//     //console.log(resp.json())
//     resp.json()
//         .then(resp => console.log(resp))
// })

.then( resp => resp.json())
.then( img => {
    console.log(img)
})
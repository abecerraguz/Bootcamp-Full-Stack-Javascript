/* 
    Importamos nustra funcion 
    crearArchivo a traves de una desestructuracion

    
*/



const { crearArchivo } = require('./helpers/multiplicar')
// let base = 3

/*
    Podemos trabajar con la consola
    para generar o configurar comandos
    si hacemos un console.log(process.argv)
    captamos los parametros para hacer estas prueba
    comentamos crearArchivo(base).
    
    console.log(process.argv)

    Nos devolvera dos argumentos:

    [
        '/usr/local/bin/node',
        '/Users/abecerraguz/Documents/2022/CURSOS/NODEJS/03-bases-de-node/02-recibir-informacion-desde-linea-de-comando/app'
    ]

    El primero argumentos devuelve 
    donde esta instalado node

    El segundo devuelvo el path de nuestro proyecto

    Podemos escribir --base=5
    y también se va a retornar como argumento.

    [
        '/usr/local/bin/node',
        '/Users/abecerraguz/Documents/2022/CURSOS/NODEJS/03-bases-de-node/02-recibir-informacion-desde-linea-de-comando/app',
        '--base=5'
    ]

    desestructuramos para obtener el tercer argumento
    node app --base=5

    Pero si no enviamos nada nos da un undefined
    podemos en la desestructuracion 
    dar un valor por defecto.

    Ahora necesitamos sacar el numero
    para esto lo volvemos a desestructurar y con un splite
    sacamos el simbolo =

    const [] = arg3.splite('=')

    A modo educativo mostramos
    esta forma pero es importante mencionar
    que esta forma tiene muchos inconvenientes
    con respecto a la posicion pero como indico 
    es con fines pedagogico.

    Ahora bien tenenmos tambien el comado
    node --help

    Sería genial poder crear nuestros propios helper

    Ahora bien alguien creo un paquete 
    para poder manejar y manipular
    los comados de la consola. Esta paqueta 
    se llama yargs a continuacion realizaremos como 
    habilitar nuestra aplicacion. para que quede habilitada 
    para que se pueda instalar paquetes.
    
*/

// console.log(process.argv)
const [ , , arg3='base=5'] = process.argv
const [, base=5 ] = arg3.split('=')
console.log('Salida de base:', base)


crearArchivo(base)
            .then( nombreArchivo => console.log(nombreArchivo,'creada') )
            .catch( err => console.log(err))





/*
Dentro del objeto importado del paquete “Yargs” contamos con el método “command”,
elcual, tiene el objetivo de definir los parámetros y la configuración 
de nuestra interfaz de línea de comando, y se usa por medio de la siguiente 
sintaxis:

.command( <comando> , <descripción>, <constructor>, <callback> )

● Comando: Acá deberás escribir un dato tipo String que representará el comando
principal de nuestra CLI.

● Descripción: Es la descripción de nuestro comando. Cada comando podrá ser
accedido próximamente en una lista, acompañados de sus descripciones para un
mejor entendimiento con el usuario.

● Constructor: En este parámetro definiremos en forma de objeto el único o los
diferentes argumentos que queremos disponer en nuestro CLI, además de sus
especificaciones personales (descripción, requerido, alias). Los argumentos en Yargs
se deberán escribir con 2 guiones antes, por ejemplo --argumento, o con un solo
guión utilizando su alias como si se tratara de un flag (bandera), ejemplo: -a

● Callback: La función se ejecutará una vez que se ejecute la línea de comando. Esta
función tiene una particularidad, la cual es recibir como parámetro el objeto “argv”
que contendrá los argumentos escritos en la línea de comando.

*/
// console.clear();
const yargs = require('yargs');
const argv = yargs
.command(
    'saludo',
    'Comando para saludar',
    {
        nombre: {
            describe: 'Argumento para definir tu nombre',
            demand: false,
            alias: 'n',
        },
    },
    (args) => {
        console.log(`¡Saludos cordiales ${args.nombre}, espero que tengas un excelente día`)
    }
)

.help().argv

// node index.js saludo --nombre=Jocelyn
// node index.js saludo --help

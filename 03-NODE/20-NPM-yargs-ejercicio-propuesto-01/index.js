/*
    Crear una interfaz de línea de comando con el paquete Yargs que defina un comando
    “PING” y un argumento número y devuelva el mensaje “PONG” y el número recibido
    concatenadamente.
*/

// node index.js PING --numero=10
// node index.js PING --help


const yargs = require("yargs");
const argv = yargs
    .command(
        "PING",
        "",
        {
            numero: {
                describe: "",
                demand: true,
                alias: "n",
            },
        },
        (args) => {
            console.log(`PONG ${args.numero}`);
        }
    )
    .help().argv;
// node index.js PING --numero=10;
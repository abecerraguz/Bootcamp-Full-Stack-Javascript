const yargs = require("yargs");
const argv = yargs
    .command(
        "adulto",
        "Comprobando edades",
        {
            edad: {
                describe: "edad",
                demand: true,
                alias: "e",
            },
        },
        (args) => {
            args.edad > 18 ? console.log("Mayor de edad") : console.log("Menor de edad");
        }
    )
    .help().argv;

    // node index.js adulto --edad=12
    // node index.js adulto -e=12

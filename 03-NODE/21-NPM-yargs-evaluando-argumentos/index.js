const yargs = require("yargs");
const child = require("child_process");
// const { lstat } = require("fs");

const user = "admin";
const pass = "1234";

const argv = yargs

    .command(
        "login",
        "Comando para acceder al Área 51",
        {
            user: {
                describe: "Usuario",
                demand: true,
                alias: "u",
            },
            pass: {
                describe: "Contraseña",
                demand: true,
                alias: "p",
            },
        },
        (args) => {

            args.user == user && args.pass == pass ? 
            
            child.exec("node admin.js", (err, stdout) => {
                    err ? 
                      console.log(err) 
                      : 
                      console.log(stdout);
            })

            :
            
             console.log("Credenciales incorrectas");
            
        }
    )
    .help().argv;

// node index.js login -u=admin -p=1234    

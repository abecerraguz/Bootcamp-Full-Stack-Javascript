const child_process = require('child_process');

let name = null;
let lastname = null;

function ejecutar(archivo){
    return new Promise((resolve)=>{
        // Ver la documentacion de quien? de child_process
        child_process.exec(`node ${archivo}`, function(err,result){
            resolve(result);
        });
    });
}

ejecutar("nombre.js").then((nombre)=>{
    name = nombre;
    ejecutar("apellido.js").then((apellido)=>{
        lastname = apellido;
        console.log(name+lastname)
    });
});


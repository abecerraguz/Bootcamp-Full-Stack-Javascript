import * as fs from 'fs';

console.log("INICIO")

// Paso 1
fs.readFile("MiAuto.json", "utf8", function (error, data) {

    if(error){
        throw 'Ha ocurrido un error'
    }else{
        let miAuto = JSON.parse(data);
        console.log(miAuto.marca);
    }
 
});
console.log("FIN")

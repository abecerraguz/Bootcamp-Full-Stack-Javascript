const https = require('https')
const fs = require('fs')


// PUNTO 1
const myArgs = process.argv.slice(2);
console.log(myArgs)
let nombreArchivo = myArgs[0]
let extension= myArgs[1]
let indicador = myArgs[2]
let cantidad = myArgs[3]


// PUNTO 2
https
     .get('https://mindicador.cl/api',(resp) =>{
        let data = "";
        resp.on('data',(chunk)=>{
            data+=chunk
        });

        resp.on('end',()=>{
            let misDatos = JSON.parse(data)
            
            console.log(misDatos.dolar.valor)
            const resultado = (cantidad)=>{
                return cantidad / misDatos.dolar.valor
            }

            let date = new Date()
fs.writeFile(`${nombreArchivo}.${extension}`,`
A la fecha: ${date}
Fue realizada cotización con los siguientes datos:
Cantidad de pesos a convertir: ${cantidad} pesos
Convertido a ${indicador} da un total de:
$${resultado(cantidad)}`,()=>{
    const mensaje = fs.readFileSync(`${nombreArchivo}.${extension}`,'utf8')
    console.log(mensaje)
})
            
            console.log(resultado(cantidad))


        });       
     })
     .on("error",(err)=>{
        console.log('Error: ' + err.message)
     })

//  PUNTO 3



//Paso 1


// node app.js cotizaciones txt dolar 250000




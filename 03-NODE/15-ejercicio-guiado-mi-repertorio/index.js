const http = require('http');
const url = require('url');
const fs = require('fs');
// Ruta Publica Node Static
const nStatic = require('node-static');
 
// Middlewhere 
const fileServer = new nStatic.Server('./public');

http.createServer(function (req, res) {
    fileServer.serve(req, res);
}).listen(8000);



http
    .createServer((req,res)=>{
        
        const params = url.parse(req.url, true).query
        const nombre = params.nombre
        const contenido = params.contenido

        // if (req.url.includes('/')) {
        //     res.write('Servidor funcionando!')
        //     res.end()
        // }

        if (req.url.includes('/crear')) {
            fs.writeFile(nombre, contenido, () => {
                res.write(`
                <html><head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <title>Archivo eliminado</title>
    </head>
        <body>
            <div class="container">
            <h1 class="h4 pt-3 pb-1">Archivo creado con éxito!</h1>
            <hr>
            </div>
        </body>
        </html>`)
                res.end()
            })
        }


        if (req.url.includes('/leer')) {
            fs.readFile(nombre, (err, data) => {
                res.write(`<html><head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
                <title>Archivo eliminado</title>
            </head>
                <body>
                <div class="container">
                    ${data}
                </div>
                </body>
                </html>`)
                res.end()
            })
        }

        if (req.url.includes('/renombrar')) {
            fs.rename('Repertorio.txt', nombre, (err, data) => {
                res.write(`
                <html><head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <title>Archivo eliminado</title>
    </head>
        <body>
            <div class="container">
            <h1 class="h4 pt-3 pb-1">Archivo Repertorio.txt renombrado por ${nombre}</h1>
            <hr>
            </div>
        </body>
        </html>`)
                res.end()
            })
        }

        if (req.url.includes('/eliminar')) {
            fs.unlink(nombre, (err, data) => {
                res.write(`
                <html><head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <title>Archivo eliminado</title>
    </head>
        <body>
            <div class="container">
            <h1 class="h4 pt-3 pb-1">Archivo ${nombre} eliminado con éxito</h1>
            <hr>
            </div>
        </body>
        </html>`)
                res.end()
            })
        }

     
    })
    .listen(8080,()=>console.log('Servidor Arriba en 8080'))


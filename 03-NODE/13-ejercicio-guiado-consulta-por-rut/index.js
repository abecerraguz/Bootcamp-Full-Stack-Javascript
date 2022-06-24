const http = require('http');
const url = require('url');

http
   .createServer((req,res)=>{
        const params = url.parse(req.url,true).query
        console.log('Salida de params-->',params);


        let users = [{
            rut:'123456789',
            nombre:'Pedro',
            apellido:'Fernadez'
        }]

        if(req.url.includes('/usuarios')){
            let usuario = users.find((u)=> u.rut == params.rut)

            usuario ? res.write(`
            <html><head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <title>Fecha y Hora de Hoy</title>
    </head>
        <body>
            <div class="container">
            <h1 class="h4 py-5">Usuario encontrado, Nombre: ${usuario.nombre} ${usuario.apellido}</h1>
            <hr>
            </div>
        </body>
        </html>`)
            :
            res.write(`
            <html><head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <title>Fecha y Hora de Hoy</title>
    </head>
        <body>
            <div class="container">
            <div class="alert alert-danger my-4" role="alert">
            Usuario no encontrado!!
</div>
        
            </div>
        </body>
        </html>
            `)

        }
        res.end()
   })

   .listen(8080,()=> console.log('Escuchando el puerto 8080'))
   
   // http://localhost:8080/usuarios/?rut=123456789
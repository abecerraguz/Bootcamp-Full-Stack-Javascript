const http = require('http');
const moment = require('moment'); // require
// El date sin moment
// const today = new Date();

http.createServer((req,res)=>{
    console.log(req.url)
    const url = req.url;

    if(url == '/hoy'){

        res.write(`<html><head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <title>Fecha y Hora de Hoy</title>
    </head>
        <body>
            <div class="container">
            <!--<h1 class="h4 py-5">${new Date() }</h1>-->
            <h1 class="h4 py-5">${moment(new Date()).locale('es-us').format('DD/MM/YYYY hh:mm:ss') }</h1>
            <hr>
            </div>
        </body>
        </html>`)
    }

    //Solución sin moment y configuracion de HTML
    if(url == '/hoy'){
        
        res.writeHead(200,{
          'Content-Type':'text/html',
          'charset':'UTF-8' 
        })

        // res.statusCode = 200;
        // res.setHeader('Content-Type', 'text/html; chartset=utf-8');
        res.write(`${today.toLocaleDateString()} en Chile`)
    }


    res.end();
})
.listen(8080,()=>{console.log('Escuchando en el puerto 8080')})
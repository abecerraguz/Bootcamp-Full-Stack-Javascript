const http = require('http');
const url = require('url');

http
   .createServer((req,res)=>{
        let boolean = false
        const params = url.parse(req.url,true).query
        console.log('Salida de params-->',params);

        if(req.url.includes('/switch')){
            let buleano = params.buleano
            // console.log( 'salida de buleano-->', buleano )
            buleano == 'true' ? ( boolean = true ) : ( boolean = false )
             boolean ? res.write('ON') : res.write('OFF')

        }
        res.end()
   })

   .listen(8080,()=> console.log('Escuchando el puerto 8080'))
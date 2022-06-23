const http = require('http');

http
.createServer((req,res)=>{
    console.log('HOLA QUIEN HABLA?');
    res.end();
})

// Utilizamos el metodo listen() que nos escucha y nos pide una salida 
// Por definir el puerto de salida
.listen(8080,()=> console.log('Escuchando el Puerto 8080'))
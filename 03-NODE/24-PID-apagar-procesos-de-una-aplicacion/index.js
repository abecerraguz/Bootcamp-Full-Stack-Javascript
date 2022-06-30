const http = require('http');

http
.createServer( (req,res)=>{
    console.log('HOLA QUIEN HABLA?');
    res.end();
} )


.listen(8080,()=> console.log('Servidor corriendo bajo el PID', process.pid))

// MAC Y LINUX
// kill -9 <pid>

// WINDOW
// taskkill /F /PID <pid>


// killall node
const http = require('http');

http.createServer((req,res)=>{
    console.log(req.url)
    const url = req.url;

    if(url == '/saludo'){
        res.write(`Hola como estas?`)
    }
    res.end();
})
.listen(8080,()=>{console.log('Escuchando en el puerto 8080')})